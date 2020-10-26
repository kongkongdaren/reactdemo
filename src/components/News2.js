import React,{Component} from "react";
import  logo from '../assets/images/1.jpg'
import '../assets/css/index.css'
class News2 extends  Component{
    constructor(props) {
        super(props);
        this.state={
            msg:'新闻',
            list:[
                '111111111111',
                '222222222222',
                '333333333333',
            ],
            list2:[
                <h2 key='1'>1</h2>,
                <h2 key='2'>2</h2>,
                <h2 key='3'>3</h2>,
            ],
            list3:[
                {title:'新闻1'},
                {title:'新闻2'},
                {title:'新闻3'},
            ],
        }
    }
    render() {
        var listResult=this.state.list.map(function (value,key) {
           return <li key={key}>{value}</li>
        })
        return (
            <div className='news'>
                {this.state.msg}
                <img src={logo} alt=""/>
                <img src={require('../assets/images/1.jpg')} alt=""/>
                <img src="https://www.baidu.com/img/xinshouye_353af22a7f305e1fb6cfa259394dea9b.png" />
                <hr/>
                {this.state.list2}
                <hr/>
                {listResult}
                <hr/>
                <ul>
                    {this.state.list3.map(function (value,key) {
                        return <li key={key}>{value.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export  default News2;