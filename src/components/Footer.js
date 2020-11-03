import React,{Component} from "react";

class Footer extends Component{
    constructor(prop) {
        super(prop);
        this.state={
            msg:'这是一个底部组件',
        }
    }
    run=()=>{
        alert('我是底部组件的run方法');
    }


    render() {
        return (

            <div>
               <h2>{this.props.msg}</h2>
            </div>
        )
    }
}
export default  Footer;