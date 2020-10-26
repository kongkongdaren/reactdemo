import React, {Component} from "react";

class News extends  Component{
    constructor(props) {
        super(props);//用于父子组件传值
        //定义数据
        this.state={
            userinfo:'张三',
        }
    }
    render() {
        
        return (
            <div>
                <ul>
                    <li>列表1</li>
                    <li>列表2</li>
                    <li>列表3</li>
                </ul>
            </div>
        )
    }

}
export  default  News;
