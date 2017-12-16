
import React, { Component } from 'react';
import axios from 'axios';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
          counter: 0
        }
        
      }
    componentDidMount() {
        axios.get('/api').then((results) => {
          
          console.log(results.data.counter);
          this.setState({counter: results.data.counter});
        })
    }
    clickAddHandler = () => {
        axios.post('/api/add',{
            add: 1
        }).then((results) => {
            console.log(results);
            this.setState({counter: results.data.counter});
        })
    }
    clickSubtractHandler = () =>  {
        axios.post('/api/subtract',{
            subtract: 1
        }).then((results) => {
            console.log(results);
            this.setState({counter: results.data.counter});
        })
    }
    render() {
        return(
            <div>
                <p>Count: {this.state.counter}</p>
            
                <button onClick={() => this.clickAddHandler()}>ADD</button>
                                 
                <button onClick={() => this.clickSubtractHandler()}>SUBTRACT</button>
            </div>
        )
    }
}

export default Counter;
