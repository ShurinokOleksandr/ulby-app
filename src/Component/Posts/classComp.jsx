import React from "react";

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cout : 0
        }
        this.inr = this.inr.bind(this);

    };
    inr ()  {
        this.setState({cout: this.state.cout + 1});
    }
    dnr = () => {
        this.setState({cout: this.state.cout - 1});
    }
    render() {
        return(
            <div>
                <h2>{this.state.cout}</h2>
                <button onClick={this.inr}>+</button>
                <button onClick={this.dnr}>-</button>
            </div>
        )
    }
}
export default Count