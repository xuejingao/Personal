import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';
import { makeStyles } from '@material-ui/styles';
import pfp from '../../utils/circled-x.png';
import data from '../../utils/profile.json'

const {
  title,
  summary,
} = data;

const useStyles = makeStyles({
  profile: {
    width: '26em'
  },
  center: {
    contextAligh: 'center'
  },
  image
});

const Banner = () => {
  const styleClasses = useStyles();

  return (
    <>
      <Row center>
        <Col >
          <Card>
            <CardImg className={styleClasses.profile} src={pfp} />
            <CardTitle>Xuejin Gao</CardTitle>
          </Card>
        </Col>
        <Col >
          <Card>
            <CardBody>
              <CardText>
                {title}
              </CardText>
              <CardText>
                {summary}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>      
    </>
  )
}

export default Banner;