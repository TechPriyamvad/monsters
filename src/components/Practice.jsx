import React,{Component} from 'react';

class Practice extends Component
{
    constructor()
    {
        super();

        this.state={
            string:'Hello Priyamvad'
        }
    }
    render()
    {
        return (
            <div className="container">
            <h1>{this.state.string}</h1>
            <button onClick={()=>this.setState({string:'vishu'})}>Click</button>
            </div>
        )
    }
}

export default Practice