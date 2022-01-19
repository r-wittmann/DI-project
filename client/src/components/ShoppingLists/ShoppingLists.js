import React, {Component} from "react";
import {addListBackend, getListsBackend, removeListBackend} from "../../services/listsService.js";

export default class ShoppingLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            newListName: "",
        }
    }

    async componentDidMount() {
        await this.getLists();
    }

    getLists = async () => {
        const lists = await getListsBackend();
        this.setState({lists});
    }

    addList = async (e) => {
        e.preventDefault();

        const success = await addListBackend(this.state.newListName);

        if (success) {
            this.setState({newListName: ""});
            await this.getLists();
        } else {
            console.log("Something went wrong");
        }
    }

    removeList = async (list) => {
        const success = await removeListBackend(list._id);
        if (success) {
            await this.getLists();
        } else {
            console.log("Something went wrong");
        }
    }

    render() {
        return (
            <>
                <h2>Shopping Lists</h2>
                {this.state.lists.length === 0
                    ? <div>No lists available</div>
                    : <div>
                        {this.state.lists.map(shoppingList =>
                            <div key={shoppingList._id}>
                                {shoppingList.listName}
                                <button onClick={() => window.location = "/lists/" + shoppingList._id}>View</button>
                                <button onClick={() => this.removeList(shoppingList)}>Remove</button>
                            </div>
                        )}
                    </div>
                }
                <div>
                    <h2>Add new List</h2>
                    <form onSubmit={this.addList}>
                        <input
                            type={"text"}
                            value={this.state.newListName}
                            onChange={(e) => this.setState({newListName: e.target.value})}
                        />
                        <button>Add List</button>
                    </form>
                </div>
            </>
        )
    }
}
