import React, {Component} from "react";

class  EventObject extends Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'事件对象'
        }
    }
    run(){

    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                {/*事件对象*/}
                <h2>事件对象</h2>
                <button onClick={this.run}>事件对象</button>
            </div>
        )
    }
}

export  default  EventObject;