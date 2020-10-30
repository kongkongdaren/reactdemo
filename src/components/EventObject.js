import React, {Component} from "react";

/**
 * 事件对象:在触发DOM上的某个事件时，会产生一个事件对象event，这个对象中包含着所有与事件相关的信息
 */
class  EventObject extends Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'事件对象',
            username:'',
        }
    }
    run=(event)=>{
        //alert(this.state.msg);
        console.log(event);
        // alert(event.target);//获取执行事件的dom节点
        // event.target.style.background='red';
        //获取dom的属性
        alert( event.target.getAttribute('aid'));

    }
    getData=()=>{
        alert(this.state.username);
    }
    inputChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.msg}
                {/*事件对象*/}
                <h2>事件对象演示</h2>
                <button aid="123" onClick={this.run}>事件对象</button>
                <br/>
                <br/>
                <h2>表单事件</h2>
               {/* //获取表单的值
                //1.监听表单的改变事件
                //2.在改变的事件里面获取表单输入的值
                //3.把表单输入的值赋值给username  this.setState({})
                //4.点击按钮的时候获取 state里面username的值  */}
                <input onChange={this.inputChange}  type="text"/> <button onClick={this.getData}>获取input的值</button>
            </div>
        )
    }
}

export  default  EventObject;