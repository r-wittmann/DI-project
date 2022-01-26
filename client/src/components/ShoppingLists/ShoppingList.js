import React, {Component} from "react";
import {getListBackend, updateListBackend} from "../../services/listsService.js";
import {getItemsBackend} from "../../services/itemsService.js";

export default class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listId: this.props.match.params.id,
            list: null,
            items: [],
        }
    }

    async componentDidMount() {
        await this.getList();
        await this.getItems();
    }

    getList = async () => {
        const list = await getListBackend(this.state.listId);
        this.setState({list});
    }

    getItems = async () => {
        const items = await getItemsBackend();
        console.log(items);
        this.setState({items});
    }

    updateList = async (newItems) => {
        const list = this.state.list;
        list.content = newItems;

        const success = await updateListBackend(list);
        if (success) {
            this.setState({list});
        } else {
            console.log("Something went wrong");
        }
    }

    removeItem = async (removableItem) => {
        const oldItems = this.state.list.content;
        const newItems = oldItems.filter(item => item !== removableItem);

        await this.updateList(newItems);
    }

    addItem = async (item) => {
        const oldItems = this.state.list.content;
        const newItems = oldItems.concat([item.name])

        await this.updateList(newItems);
    }

    render() {
        return (
            <>
                <h2>{this.state.list ? this.state.list.listName : "Loading..."}</h2>
                {this.state.list && this.state.list.content.map(item =>
                    <div key={item}>
                        <span>{item}</span>
                        <button onClick={() => this.removeItem(item)}>Remove</button>
                    </div>
                )}
                <h3>Items</h3>
                {this.state.items
                    .filter(item => !this.state.list.content.includes(item.name))
                    .map(item =>
                    <div key={item._id}>
                        <span>{item.name}</span>
                        <button onClick={() => this.addItem(item)}>Add</button>
                    </div>
                )}
            </>
        )
    }
}
