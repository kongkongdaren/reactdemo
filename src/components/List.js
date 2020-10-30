import React,{Component} from "react";

class  List extends Component{
    constructor(prop) {
        super(prop);
        this.state={
            username:'',
        }
    }
    getData=()=>{
        alert(this.state.username);
    }
    inputChange=()=>{
       /* 获取dom节点
        1.给元素定义ref属性
        2.通过this.refs.username 获取dom节点
        */
    let val=this.refs.username.value;
    this.setState({
        username:val,
    })
    }
    //键盘弹起
    inputKeyUp=(e)=>{
        console.log(e.keyCode)
        if (e.keyCode==13){
            alert(e.target.value);
        }
    }
    inputKeyDown=(e)=>{
        console.log(e.keyCode)
        if (e.keyCode==13){
            alert(e.target.value);
        }
    }
    inputKeyPress=(e)=>{
        console.log(e.keyCode)
        if (e.keyCode==13){
            alert(e.target.value);
        }
    }


    render() {
        return (
            <div>
                我是List组件

                {/* //获取表单的值
                //1.监听表单的改变事件
                //2.在改变的事件里面获取表单输入的值
                //3.把表单输入的值赋值给username  this.setState({})
                //4.点击按钮的时候获取 state里面username的值  */}
                <input ref="username" onChange={this.inputChange}  type="text"/> <button onClick={this.getData}>获取input的值</button>
                <br/>
                <br/>
                <h2>键盘事件</h2>
                <input onKeyUp={this.inputKeyUp}/>
                <input onKeyDown={this.inputKeyDown}/>
                <input onKeyPress={this.inputKeyPress}/>
            </div>
        )
    }
}
export  default  List;