import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import pfp from '../../utils/smiley.png';

const aboutMe = "Hello I'm Xuejin";

const Banner = () => {
  return (
    <>
      <Row center>
        <Col sm="6">
          <Card>
            <CardImg src={pfp} />
            <CardTitle>Xuejin Gao</CardTitle>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardText>
              {aboutMe}
            </CardText>
          </Card>
        </Col>
      </Row>      
    </>
  )
}

export default Banner;