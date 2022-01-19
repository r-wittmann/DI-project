import React, {Component} from "react";
import {getListsBackend} from "../../services/listsService.js";

export default class ShoppingLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
        }
    }

    async componentDidMount() {
        await this.getLists();
    }

    getLists = async () => {
        const lists = await getListsBackend();
        this.setState({lists});
        console.log(lists);
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
                            </div>
                        )}
                    </div>
                }
            </>
        )
    }
}
