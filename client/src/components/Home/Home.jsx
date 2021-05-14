import React from 'react';
import { Bar } from 'react-chartjs-2';

import { connect } from 'react-redux';

import { Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';

function Home(props) {

  const chatSettings = (num = 0) => ({
      labels: [''],
      datasets: [{
        fill: true,
        label: ` Price now is`,
        data: props[num]['price'],
        backgroundColor: ['#0069D9'],
        borderColor: ['rgb(1,1,1,0.1)'],
        borderWidth: 3,
        radius: 0,
        borderJoinStyle: "round",
        lineTension: 0.4,
      }]
  });

// const handleClick = () => {
//   const url = new URL('http://localhost:3000/');
//   var searchParams = new URLSearchParams(url);
//   console.log(searchParams);
// }

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
              <div className="col-6 float-left">
                Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Five companies in the U.S. information technology industry, along with Amazon, Google, Microsoft, and Facebook. It is one of the most popular smartphone and tablet companies in the world.
            </div>
              <div className='col-6 float-left'>
                <Bar
                  data={chatSettings()}
                  options={{ animation: { duration: 0 }}}
                />
                <Button /* onClick={handleClick} */>See more</Button>
              </div>
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
            <Card.Body>
              <div className="col-6 float-left">
                Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. It is considered one of the five Big Tech companies along with Amazon, Facebook, Apple, and Microsoft.[9][10][11]
              </div>
              <div className='col-6 float-left'>
                <Bar
                  data={chatSettings(1)}
                  options={{ animation: { duration: 0 }}}
                />
                <Button>See more</Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Microsoft
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div className="col-6 float-left">
                Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.
              </div>
              <div className='col-6 float-left'>
                <Bar
                  data={chatSettings(2)}
                  options={{ animation: { duration: 0 }}}
                />
                <Button>See more</Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Amazon
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div className="col-6 float-left">
                Amazon.com, Inc. (/ˈæməzɒn/ AM-ə-zon) is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook. The company has been referred to as "one of the most influential economic and cultural forces in the world", as well as the world's most valuable brand.
              </div>
              <div className='col-6 float-left'>
                <Bar
                  data={chatSettings(3)}
                  options={{ animation: { duration: 0 }}}
                />
                <Button>See more</Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Facebook
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div className="col-6 float-left">
                Facebook (stylized as facebook) is an American online social media and social networking service based in Menlo Park, California, and a flagship service of the namesake company Facebook, Inc. It was founded by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.
               
              </div>
              <div className='col-6 float-left'>
                <Bar
                  data={chatSettings(4)}
                  options={{ animation: { duration: 0 }}}
                />
                <Button>See more</Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Tesla
              </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <div className="col-6 float-left">
                Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services. Tesla is ranked as the world's best-selling plug-in and battery electric passenger car manufacturer, with a market share of 16% of the plug-in segment (which includes hybrids) and 23% of the battery-electric (purely electric) segment 2020 sales.
              </div>
              <div className='col-6 float-left'>
                <Bar
                  data={chatSettings(5)}
                  options={{ animation: { duration: 0 }}}
                />
                <Button>See more</Button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

      </Accordion>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps, null)(Home);
