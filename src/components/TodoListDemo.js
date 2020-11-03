import React ,{Component} from "react";
import storage from "../model/storage";
class TodoListDemo extends  Component{
    constructor() {
        super();
        this.state={
            list:[
                {
                    title:'录制ionic',
                    checked:true
                },
                {
                    title:'录制node.js',
                    checked:false
                },
                {
                    title:'录制ios',
                    checked:true
                },
                {
                    title:'录制android',
                    checked:false
                },


            ],
        }
    }
    addData=(event)=>{
        //按下回车的时候
        if (event.keyCode==13){
            let  title=this.refs.title.value;
            let tempList=this.state.list;
            tempList.push(
                {
                    title:title,
                    checked:false,
                }
            )
            this.setState({
                list:tempList,
            })
            //表单置为空
            this.refs.title.value='';
            //执行缓存数据
            storage.set('todolist',tempList);
            // localStorage.setItem('todolist',JSON.stringify(tempList));
        }
    }
    checkboxChange=(key)=>{
        let tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList,
        })
        //执行缓存数据
        // localStorage.setItem('todolist',JSON.stringify(tempList));
        storage.set('todolist',tempList);
    }
    removeData=(key)=>{
        let tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList,
        })
        //执行缓存数据
        // localStorage.setItem('todolist',JSON.stringify(tempList));
        storage.set('todolist',tempList);
    }
    //声明周期函数 页面加载就会触发
    componentDidMount() {
        //获取缓存的数据
        // var todolist=JSON.parse(localStorage.getItem('todolist'));
        var  todolist=storage.get('todolist');
        if (todolist){
           this.setState({
               list:todolist
           })
        }

    }

    render() {
        return (
            <div>
                <input ref='title' type="text" onKeyUp={this.addData}/>
                <h2>待办事项</h2>
                <hr/>
                <ul>
                    {
                        this.state.list.map( (value,key)=> {
                            if (!value.checked){
                                return (
                                   <li key={key}>
                                       <input type="checkbox" checked={value.checked}
                                              onChange={this.checkboxChange.bind(this,key)}/>
                                       {value.title}
                                       --<button onClick={this.removeData.bind(this,key)}>删除</button>
                                   </li>
                                )
                            }
                        })
                    }
                </ul>

                <h2>已完成事项</h2>
                <ul>
                    {
                        this.state.list.map( (value,key)=> {
                            if (value.checked){
                                return (
                                    <li key={key}>
                                        <input type="checkbox" checked={value.checked}  onChange={this.checkboxChange.bind(this,key)}/>
                                        {value.title}
                                        --<button onClick={this.removeData.bind(this,key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <hr/>
            </div>
        )
    }
}
export  default  TodoListDemo;