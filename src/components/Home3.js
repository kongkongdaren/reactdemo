import React,{Component} from "react";

class Home3 extends Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'我是home3组件',
            message:'我是一个新数据',
            username:'哈哈哈',
        }
        this.getMessage=this.getMessage.bind(this);
    }
    run(){
        alert('我是一个run方法')
    }

    getData(){
         alert(this.state.msg)
    }
    getName=()=>{
        alert(this.state.username)
    }
    getMessage(){
        alert(this.state.message)
    }
    setData=()=>{
        //改变state的值
        this.setState(
            {
                msg:'我发生变化了'
            }
        )
    }
    setName=(msg)=>{
        //改变state的值
        this.setState(
            {
                username:msg
            }
        )
    }
    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <h2>{this.state.username}</h2>
                <button onClick={this.run}>执行方法</button>
                <br/>
                <button onClick={this.getData.bind(this)}>获取数据--第一种改变this指向的方法</button>
                <br/>
                <button onClick={this.getMessage}>获取数据--第二种改变this指向的方法</button>
                <br/>
                <button onClick={this.getName}>获取数据--第三种改变this指向的方法</button>
                <br/>
                <button onClick={this.setData}>改变state里面的值</button>
                <br/>
                <button onClick={this.setName.bind(this,'啦啦啦')}>执行方法传值</button>

                <button onClick={this.setName.bind(this,'啦啦啦','lllll')}>执行方法传值</button>
            </div>
        )
    }

}
export  default  Home3;