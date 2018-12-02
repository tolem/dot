import React, {Component} from 'react'

class Err extends Component{

    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

componentDidCatch(err, info){
    this.setState({ hasError: true })
}
render(){
    if(this.state.hasError){
        return <h1>Ooop seem you have network issue</h1>
    }
    return this.props.children
}
}
export default Err;