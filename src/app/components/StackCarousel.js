import React from "react";
import { Row, Col, Card } from "react-bootstrap"; // Importing specific components from react-bootstrap

const StackCarousel = (props) => {
  return (
    <div>
      <Row lg={3} md={3} sm={12}>
          <Card style={{width: "100%", minHeight: "18rem", padding: "2rem", border: "none"}}>
            {props.icon}
            <h4 className="cardTitle">{props.title}</h4>
            <p>{props.text}</p>
          </Card>
      </Row>
    </div>
  );
};

export default StackCarousel;
