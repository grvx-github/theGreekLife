import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Container } from "react-bootstrap";

const StackCarousel = () => {
  return (
    <Container className="d-flex">
      <Row lg={3} sm={12}>
        <Col className="d-flex">
          <Image
            src={props.icon}
            width={500}
            height={500}
            alt=""
          />
					<h4 className="cardTitle">{props.title}</h4>
					<p>{props.text}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default StackCarousel;
