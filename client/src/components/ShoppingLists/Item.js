import React, {Component} from "react";

export default class Item extends Component {
    render() {
        return (
            <div
                style={{
                    boxSizing: "border-box",
                    height: "68px",
                    margin: "5px",
                    padding: "10px",
                    backgroundColor: "blue",
                    borderRadius: "3px",
                    textAlign: "center",
                    color: "white"
                }}
                onClick={() => this.props.handleClick(this.props.itemName)}
            >
                <span>{this.props.itemName}</span>
            </div>
        )
    }
}
