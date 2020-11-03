import React ,{Component} from "react";

class TodoListDemo extends  Component{
    constructor() {
        super();
        this.state={
            list:[],
        }
    }
    addDate=()=>{
        var tempList=this.state.list;
        tempList.push(this.refs.title.value);//返回值是一个索引值
        this.refs.title.value='';
        this.setState({
            list:tempList,
        })
    }
    deleteDate=(key)=>{
        var tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList,
        })
    }
    render() {
        return (
            <div>
                <h2>React TodoList演示</h2>
                <input ref="title" type="text"/> <button onClick={this.addDate}>增加</button>
                <ul>
                    {
                        this.state.list.map((value, key)=> {
                               return (
                                       <li key={key}>{value} ---- <button onClick={this.deleteDate.bind(this,key)}>删除</button></li>
                               )
                        })
                    }


                </ul>
            </div>
        )
    }
}
export  default  TodoListDemo;