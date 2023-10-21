
import React ,{Component} from "react"

class Test extends Component{
    constructor(){
        super()
        this.state={
            color:"red",
            cost:45
        }
    }
    render(){
        return(
            <>
            <h1>
                hello world {this.state.color} and {this.state.cost}
            </h1>
            </>
        )
    }
}
export default Test 