import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    justifyItems: 'center',
    display: 'grid',
    // width: '75em',
    gridTemplateColumns: '.75fr 1.25fr',
  },
  position: {
    width: '7em',
  },
  flex: {
    display: 'flex'
  },
  underline: {
    height: '5px',
    width: '11em',
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  blue: {
    backgroundColor: 'blue'
  }
});

const SubHeader = (props) => {
  const { header } = props;
  const styleClasses = useStyles();

  return (
    <div className={styleClasses.container}>
      <div className={styleClasses.position}>
        <h4><strong>{header}</strong></h4>

        <div className={styleClasses.flex}>
          <div className={`${styleClasses.red} ${styleClasses.underline}`}></div>
          <div className={`${styleClasses.green} ${styleClasses.underline}`}></div>
          <div className={`${styleClasses.blue} ${styleClasses.underline}`}></div>
        </div>
      </div>
    </div>
  )
};

export default SubHeader;