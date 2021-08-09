import React, { Component } from 'react'
import './card-list/card-list.styles.css'
import {Card} from './card-list/card.component'

export default class test extends Component {
    constructor()
    {
        super();
        this.state = 
        {
            movies:[]
        }
    }

    componentDidMount()
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(movie => this.setState({movies:movie}));
    }
    
    render() {
        return (
            <div className="cardList">
                {
                    this.state.movies.map(movie  =>(
                        <Card key={movie.id} monster={movie} />
                    ) )
                }
            </div>
        )
    }
}
