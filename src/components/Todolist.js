import React,{Component} from "react";

class Todolist extends Component{
    constructor() {
        super();
        this.state={
            username:'33333',

        }
    }
    inputChange=(event)=>{
        this.setState({
            username:event.target.value,
        })
    }
    getUsername=()=>{
        this.setState({
            username:'hello',
        })
    }
    render() {
        return (
            <div>
                <h2>双向绑定</h2>
                {/*model改变影响view view改变影响model*/}
                <input  type="text" value={this.state.username} onChange={this.inputChange}/>

                <p>{this.state.username}</p>

                <button onClick={this.getUsername}>改变username的值</button>
            </div>
        )
    }
}
export  default  Todolist;