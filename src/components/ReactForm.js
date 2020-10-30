import React, {Component} from "react";

class ReactForm extends Component {
    constructor() {
        super();
        this.state = {
            msg: 'react表单',
            name: '',
            sex: '1',
            city: '',
            citys: [

                '北京', '上海', '深圳'
            ],
            hobby: [
                {
                    'title': "睡觉",
                    'checked': true
                },
                {
                    'title': "吃饭",
                    'checked': false
                },
                {
                    'title': "敲代码",
                    'checked': true
                }
            ],
            info: ''
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.name + this.state.sex + this.state.city + this.state.hobby+this.state.info)
    }
    handleSex = (event) => {
        this.setState({
            sex: event.target.value,
        })
    }
    handleCity = (event) => {
        this.setState({
            city: event.target.value,
        })
    }
    handleHobby=(key)=>{
        var hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    handleInfo=(event)=>{
        this.setState({
            info:event.target.value,
        })
    }


    render() {
        return (
            <div>
                <h2>{this.state.msg}</h2>
                <form onSubmit={this.handleSubmit} action="">
                    用户名: <input type="text" value={this.state.name} onChange={this.handleName}/> <br/>
                    性别: 男<input type="radio" value="1" checked={this.state.sex == 1} onChange={this.handleSex}/>
                    女 <input type="radio" value="2" checked={this.state.sex == 2} onChange={this.handleSex}/> <br/>
                    居住城市:
                    <select value={this.state.city} onChange={this.handleCity}>
                        {
                            this.state.citys.map(function (value, key) {
                                return <option key={key}>{value}</option>
                            })
                        }

                    </select> <br/>
                    爱好:
                    {
                        // 注意this指向
                        this.state.hobby.map((value,key)=>{

                            return (

                                <span key={key}>

                                    <input type="checkbox"  checked={value.checked}  onChange={this.handleHobby.bind(this,key)}/> {value.title}
                               </span>
                            )
                        })
                    }


                    <br/>
                    备注:<textarea name="" id="" cols="30" rows="10" vlaue={this.state.info}  onChange={this.handleInfo}></textarea>
                    <br/>
                    <input type="submit" defaultValue="提交"/>
                </form>

            </div>
        )
    }
}

export default ReactForm;