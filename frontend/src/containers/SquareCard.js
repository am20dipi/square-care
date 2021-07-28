import React from 'react'

export default function SquareCard() {
    return (
        <div class="card" styles="width: 18rem;">
            <img className="listing-image" src="..." alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text</p>
                <p># of Likes</p>
                <button className="view-button">View</button>
                <button className="like-button">Like</button>
                <button className="delete-button">Delete</button>
            </div>
        </div>
    )
}
