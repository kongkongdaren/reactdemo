import React,{Component} from "react";

class Header extends Component{
    constructor(prop) {
        super(prop);
        this.state={
            msg:'这是一个头部组件',
        }
    }
    getNews=()=>{
        var msg=this.props.news.state.msg;
        alert(msg);
    }


    render() {
        return (

            <div>
               <h2>{this.props.title}</h2>
                <button onClick={this.props.run}>调用父组件的run方法</button>
                <br/>
                <br/>
                <button onClick={this.props.news.getData}>获取整个父组件</button>
                <br/>
                <br/>
                <button onClick={this.getNews}>获取整个父组件</button>
                <br/>
                <br/>
                <button onClick={this.props.news.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button>
            </div>
        )
    }
}
export default  Header;