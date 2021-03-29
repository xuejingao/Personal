import React from 'react';
import { makeStyles } from '@material-ui/styles';
import pfp from '../../utils/circled-x.png';
import data from '../../utils/profile.json'

const {
  name,
  email,
  title,
  summary,
  socials
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

const renderSocial = (href, icon) => {
  return (
    <>
      <li>
        <a target="_blank" rel="noreferrer" href={href}>
          <i className={icon}></i>
        </a>
      </li>
    </>
  );
}

const Banner = () => {
  const styleClasses = useStyles();
  console.log(email)

  return (
    <>

      <div>
        <div>
          <img src={pfp} alt="My Profile Display" className={styleClasses.profileImg}/>
        </div>
        <div>
          <p><small>{title}</small></p>
          <h3><strong>{name}</strong></h3>
          <p>{summary}</p>
          <ul>
            <li>
              <a href={"mailto:" + email + "?subject=Mail from Our Site"}>
                <i className="far fa-envelope"></i>
              </a>
            </li>
            {
              socials.map(obj => {
                return renderSocial(obj.href, obj.fontAwesome5);
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Banner;