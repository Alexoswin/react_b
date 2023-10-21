import React ,{Component} from "react";
import ReactDOM from 'react-dom';

class Ncar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <h1>
                {this.props.model}
            </h1>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ncar model="Mustang"/>);
