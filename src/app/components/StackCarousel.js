  import React from "react";
  import { Card } from "react-bootstrap";

  const StackCarousel = (props) => {
    return (
        <Card style={{border: "none", background: 'transparent'}}>
          {props.icon}
          <Card.Title>
            <h4>{props.title}</h4>
          </Card.Title>
          <Card.Text>
            <p>{props.text}</p>
          </Card.Text>
        </Card>
    );
  };

  export default StackCarousel;
