import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from "./img1.png";
import './card.css';

export class Cards extends Component {
    render() {
        return (
            <>
            <Card style={{ width: '28.75rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text> */}
                <div className="subComponents">
                <Card.Body className="leftCard">
                    <Card.Title>37</Card.Title>
                    <Card.Text>Interactive Quizzes</Card.Text>
                </Card.Body>
                <Card.Body className="rightCard">
                    <Card.Title>265+</Card.Title>
                    <Card.Text>Concepts and exercises</Card.Text>
                </Card.Body>
                </div>
                <button variant="primary" className='startButton'>Start Course</button>
            </Card.Body>
            </Card>
            </>
        );
    }
}

export default Cards
