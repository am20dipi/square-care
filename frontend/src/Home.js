import React from 'react'
import SquaresContainer from './containers/SquaresContainer'
import SquareCard from './containers/SquareCard'

export default class Home extends React.Component {
    render() {
        return (
            <>
                <h1>Home Page</h1>
                <SquaresContainer />
                
            </>
        )
    }
    
}

