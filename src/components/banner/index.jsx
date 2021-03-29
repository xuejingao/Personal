import React from 'react';
import { makeStyles } from '@material-ui/styles';
import pfp from '../../utils/circled-x.png';
import data from '../../utils/profile.json'

const {
  name,
  title,
  summary,
} = data;

const useStyles = makeStyles({
  profileImg: {
    width: '22em',
    borderRadius: '50%',
    boxShadow: '0px 0px 30px #aaa',
  },
  center: {
    contextAligh: 'center'
  },
  image: {
    width: '10em'
  }
});

const renderSocials = (href, icon) => {
  return (
    <>
      <li>
        <a href={href}>
          <i className="fab fa-linkedin-in"></i>
        </a>
      </li>
    </>
  );
}

const Banner = () => {
  const styleClasses = useStyles();

  return (
    <>
      <div>
        <img src={pfp} alt="My Profile Display" className={styleClasses.profileImg}/>
      </div>
      <div>
        <p><small>{title}</small></p>
        <h3><strong>{name}</strong></h3>
        <p>{summary}</p>
        <ul>
          <li>
            <i className="fa fa-linkedin-square"></i>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Banner;