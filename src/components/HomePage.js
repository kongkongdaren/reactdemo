import React,{Component} from "react";
import Header from "./Header";
class HomePage extends Component{
    constructor(prop) {
        super(prop);
        this.state={
            msg:'我是一个新闻组件',
            title:'首页组件'
        }
    }

    render() {
        return (
            <div>
                <Header title={this.state.title}></Header>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}
export default  HomePage;