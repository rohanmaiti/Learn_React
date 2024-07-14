import React,{Component} from "react";

class Class_01 extends Component{
render(){
    return (<>
    <h1>{this.props.msg}</h1>
    <h2>Welcome to React class 01</h2>
    {this.props.children}
    </>)
}
} 

export default Class_01;