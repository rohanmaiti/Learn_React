import React , {Component} from "react"
class Class_02 extends Component{
    render(){
        // rendering list using JSX
        return (<>
        {
            this.props.array.map(ele=>{<li>{ele}</li>})
        }
        </>)
    }
}
export default Class_02;