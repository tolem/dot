import React,{ Component } from 'react';
import CardList from './CardList';
import Box from './new';
import './pp.css'
import Err from './err'




class App extends  Component{
    constructor(){
        super();
        this.state  ={
        robots:[],

        searchfeed:''
    }
    }
    onD = (event) => {
        this.setState({searchfeed: event.target.value})

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typecode.com/users')
        .then(resp=> {resp.json()})
        .then(users =>{this.setState({robots:users})}) 
    }

    render(){
        const fillOut = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfeed.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1 className='tc'>offline</h1> }
        else{
            return (
        <div className='tc'>
            <h1 className='f1'>Search</h1>
            <Box newDetect = {this.onD} />
            <Err>
            <CardList robots ={ fillOut} />
            </Err>
        </div>
    );}
}
}
export default App;