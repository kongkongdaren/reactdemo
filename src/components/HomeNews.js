import React,{Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
class HomeNews extends Component{
    constructor(prop) {
        super(prop);
        this.state={
            msg:'我是一个底部组件',
            title:'底部组件'
        }
    }
    run=()=>{
        alert('我是父组件的run方法')
    }
    getData=()=>{
        alert(this.state.title);
    }
    //获取子组件里面传过来的数据
    getChildData=(result)=>{
        alert(result);
        this.setState({
            msg:result,
        })
    }
    //父组件主动调用子组件的数据和方法
    getFooter=()=>{
     //  alert(this.refs.footer.state.msg);
        this.refs.footer.run();
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} run={this.run} news={this}></Header>
                <br/>
                <br/>
                <br/>
                {this.state.msg}
                <br/>
                <br/>
                <Footer ref='footer'></Footer>
                <button onClick={this.getFooter}>获取整个底部组件</button>
                <br/>
                <br/>
                <br/>
                {this.state.msg}
            </div>
        )
    }
}
export default  HomeNews;