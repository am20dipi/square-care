import React from 'react'
import SquareCard from './SquareCard'


class SquaresContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares: []
        }
        
    }
    
  

    componentDidMount(){
        fetch("http://localhost:3000/squares")
        .then(response => response.json())
        .then(json => {
            this.setState({squares: json})
            // function .setState
            // we use "this" bc we are inside a class component
            // .
        })
    }

    makeSquareCards() {
        let squares = this.state.squares
        return squares.map(square => <SquareCard key={square.id} {...squares} />)
    }

    render(){
        return (
            <> 
            <h1>Squares</h1>
                <div id="square-container">
                    {this.makeSquareCards()}
                </div>
            </>
            
        )

    }


}

export default SquaresContainer


