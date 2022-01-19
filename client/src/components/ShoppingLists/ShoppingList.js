import React, {Component} from "react";
import {getListBackend} from "../../services/listsService.js";

export default class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listId: this.props.match.params.id,
            list: null
        }
    }

    async componentDidMount() {
        await this.getList();
    }

    getList = async () => {
        const list = await getListBackend(this.state.listId);
        this.setState({list});
    }

    render() {
        return (
            <>
                <h2>{this.state.list ? this.state.list.listName : "Loading..."}</h2>
                {this.state.list && this.state.list.content.map(item =>
                    <div key={item}>
                        <span>{item}</span>
                    </div>
                )}
            </>
        )
    }
}
