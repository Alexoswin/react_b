import React , {Component} from "react";
import ReactDOM from 'react-dom/client';

class Car extends Component{
    render(){
        return(
            <h1>
                i am a {this.props.color} car 
            </h1>
        )
    }
}
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Car color="red"/>)
export default Car