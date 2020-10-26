import React,{Component} from "react";
class  Home extends  Component{
    constructor(props) {
        super(props);//用于父子组件传值
        //定义数据
        this.state={
            name:'张三',
            age:'20',
            userinfo:{
                username:'李四',
            }
        }
    }
    //jsx
    render() {
        return (
            <div>
                <h2>react组件里面的所有节点都要被根节点包含</h2>
                <p>姓名:{this.state.name}</p>
                <p>年龄:{this.state.age}</p>
                <p>对象:{this.state.userinfo.username}</p>
            </div>
        )
    }
}

export default Home;


