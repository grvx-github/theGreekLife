
import React from "react";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import { Container, Row, Card, Col } from "react-bootstrap";
import Footer from "./Footer";
import SideMenuBar from "./Admin/SideMenuBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/holidayComp.modules.css";

const HolidayComp = (props) => {
  return (
    <div>

    <div className="holidayPage">
      <Container fluid className="holidayTop d-flex">
        <div className="backBtn">
          <Image src={'/Vector.svg'} alt="" height={40} width={40} /> 
        </div>
        <div className="title">
          <h2>
            {/* {props.title} */}
            Athens and Corfu
          </h2>
        </div>
      </Container>
      <div className="holidayImg"></div>
      <div className="holidayMain">
        <h4>Day 1 – Arrival in Athens</h4>
        <p>
          Arrive in Athens and transfer to your hotel. Rest of day at leisure.
          Overnight in Athens. Possibility to join an optional Athens by night
          tour with dinner & folklore show, depending on your arrival time.
        </p>
        <h4>Day 2 – Athens</h4>
        <p>
          After breakfast, pick up from your hotel for an Athens city tour.
          Depart for Panathinaiko Stadium, the cradle of the first Olympic Games
          took place in 1896 (short stop). Pass by the Prime Minister’s
          Residence, ex-Royal Palace (guarded by colorful Evzones), Zappeion
          (Conference & Exhibition Hall). Proceed, passing by the Roman Temple
          of Olympian Zeus. Continue passing by the National Garden, Hadrian’s
          Arc, St. Paul’s Church, Parliament, Tomb of the Unknown Soldier,
          Schliemann’s House (Numismatic Museum), Catholic Cathedral, Academy,
          University, National Library, Old Parliament, Constitution Square,
          Russian Orthodox Church and finally Acropolis (visit Propylaea, Temple
          of Athena Nike, Parthenon, Erechtheion with its Porch of Maidens).
          Return to your hotel. Rest of the day at leisure. Overnight in Athens.
          Option to include a visit to Acropolis Museum at an extra charge.
        </p>
        <h4>Day 3 – Athens/Corfu </h4>
        <p>
          After breakfast, pick up from your hotel and transfer to Athens
          Airport for your flight to Corfu. Upon arrival transfer to your hotel.
          Rest of day at leisure. Overnight in Corfu.
        </p>
        <h4>Day 4 – Corfu</h4>
        <p>
          Breakfast at the hotel. Day at leisure to enjoy this cosmopolitan and
          enchanting island. Overnight in Corfu.
        </p>
        <h4>Day 5 –Corfu </h4>
        <p>
          Breakfast at the hotel and a day at leisure to explore the beautifully
          preserved Old Town. Overnight in Corfu.
        </p>
        <h4> Day 6 – Corfu/Athens</h4>
        <p>
          After breakfast, pick up from your hotel and transfer to Athens
          Airport for your departure flight.
        </p>
        <h4>Day 7 – Departure from Athens</h4>
        <p>
          After breakfast, pick up from your hotel and transfer to Athens
          Airport for your departure flight.
        </p>
      </div>
      <div className="holidayCard">
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="/HolidayCardImg1.png"></Card.Img>
                <Card.Body>
                  <h4>Package Includes</h4>
                  <ul>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="/HolidayCardImg1.png"></Card.Img>
                <Card.Body>
                  <h4>Package Includes</h4>
                  <ul>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="/HolidayCardImg1.png"></Card.Img>
                <Card.Body>
                  <h4>Package Includes</h4>
                  <ul>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Assumenda, eligendi?
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="fNotes">
        <h4>Please Keep in Mind</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default HolidayComp;
