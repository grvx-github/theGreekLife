import React from "react";
import { Row, Col, Card } from "react-bootstrap"; // Importing specific components from react-bootstrap

const StackCarousel = (props) => {
  return (
    <div>
      <Card style={{ width: "100%", minHeight: "18rem", padding: "2rem", border: "none", background: "transparent" }}>
        
        {props.icon}
        <h4 className="cardTitle">{props.title}</h4>
        <p>{props.text}</p>
      </Card>
    </div>
  );
};

export default StackCarousel;
