import React from 'react'
import Square from '../Square'

export default function SquareContainer({ squares }) {
    return (
        squares.map(square => {
            return <Square key={square} square={square}/>
        })

    )
}
