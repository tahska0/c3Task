import React, { Component } from 'react'
import './text.css';

export class Text extends Component {
    render() {
        return (
            <div className='text'>
                <h1>Logic</h1>
                <h2>Stretch your analytic muscles with knights, knaves, logic gates, and more! </h2>
                <div className="para">
                <p>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning. 
                </p>
                <p>You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges!</p>
                </div>
            </div>
        )
    }
}

export default Text
