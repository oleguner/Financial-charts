import React from 'react';
import { Route, Router } from "react-router";

import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className='App-body'>
      <Accordion className="col-8">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Apple
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Apple
                </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Google
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Microsoft
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Amazon
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Facebook
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Tesla
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
    </div>

  );
}

export default Home;