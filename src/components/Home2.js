import React, {Component} from "react";
import '../assets/css/index.css'

class Home2 extends Component {
    //数据
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是home2组件',
            title: '我是一个title',
            color: 'green',
            style: {
                color: 'blue',
                fontSize: '50px',
            }
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <div title='111111'>我是一个div</div>
                <br/>
                <div title={this.state.title}>我是一个div</div>
                <br/>
                <div className={this.state.color}>我是红色的div</div>
                <br/>
                <label htmlFor="name">姓名</label>
                <input id='name' type="text"/>
                <br/>
                <div style={this.state.style}>测试</div>

            </div>
        )
    }
}

export default Home2;