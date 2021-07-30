import React from 'react'
import SquareCard from './SquareCard'


class SquaresContainer extends React.Component {
    state = {
        squares: []
    }
    
    makeCards(){
        squares.map(square => <SquareCard key={square.id} {...squares}/>)
    }

    componentDidMount(){
        fetch("http://localhost:3001/squares")
        .then(response => response.json())
        .then(json => {
            this.setState({squares: json})
        })
    }

    render(){
        return (
            <div id="square-container">
                {this.makeCards()}
            </div>
        )

    }


}

export default SquaresContainer


