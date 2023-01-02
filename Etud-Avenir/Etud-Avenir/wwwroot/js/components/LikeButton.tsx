import * as React from "react";

type MyState = {
    liked: boolean; // like this
};

export default class LikeButton extends React.Component<{ title: string }, MyState> {

    state: MyState = {
        liked: false
    };

    render() {
        if (this.state.liked) return <h1>You liked this</h1>;

        return <button onClick={() => this.setState({ liked: true })}>{this.props.title}</button>
    }
}

