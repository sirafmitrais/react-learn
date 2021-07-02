import React from 'react';
export default class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            postList: []
        }
    }

    componentDidMount() {
        this.setState({ postList: ["Note 1", "Note 2"] })
    }

    updateTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    addTitle = (title) => {
        const postList = this.state.postList;

        this.setState({ postList: [...postList, title], title: "" })
    }

    deleteTitle = (title) => {
        const postList = this.state.postList;
        this.setState({ postList: [...postList.filter(it => it != title)] })
    }

    render() {
        return <div>
            Title : <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
            <button onClick={() => this.addTitle(this.state.title)}>Add</button> <br /><br />
            postList : <br />
            {this.state.postList.map((it, key) => {
                return (
                    <div key={key}>{it} <span style={{ cursor: "pointer" }} onClick={() => this.deleteTitle(it)}>Remove</span> <br />
                    </div>
                )
            })}
        </div>
    }
}