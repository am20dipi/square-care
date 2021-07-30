import React from 'react'

export default function SquareCard(props) {
    return (
        <div className="card" id={'square-%{props.id}'}>
            <div className="card-body">
                <h5>{props.name}</h5>
                <p>Likes:{props.likes}</p>
                <button className="view-button">View</button>
                <button className="like-button">Like</button>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )
}
