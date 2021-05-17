import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
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
    boxShadow: '0px 0px 60px #aaa',
  },
  gridContainer: {
    display: 'grid',
    width: '75em',
    gridTemplateColumns: '.75fr 1.25fr',
    justifyItems: 'center',
    margin: 'auto',
    marginTop: '3em',
    marginBottom: '4em'
  },
  table: {
    display: 'table',
    // margin: '2em 0'
  },
  horizontalUl: {
    listStyle: 'none',
    padding: '0',
    margin: '1em 1em'
  },
  inline: {
    display: 'inline',
  }
});


const renderSocial = (href, icon, key, style) => {
  const classes = `fa-2x ${icon}`  
  return (
    <li key={key} className={style}>
      <Button>
        <a target="_blank" rel="noreferrer" href={href}>
          <i className={classes}></i>
        </a>
      </Button>
    </li>
  );
};

const Banner = () => {
  const styleClasses = useStyles();

  return (
    <>
      <div>
        <div className={styleClasses.gridContainer}>
          <div>
            <img src={pfp} alt="My Profile Display" className={styleClasses.profileImg}/>
          </div>
          
          <div>
            <div>
              <p><small>{title}</small></p>
              <h2><strong>{name}</strong></h2>
              <p>{summary}</p>
            </div>
            
            <div className={styleClasses.table}>
              <ul className={styleClasses.horizontalUl}>
                <li key="1" className={styleClasses.inline}>
                  <Button>
                    <a href={"mailto:" + email + "?subject=Mail from Our Site"}>
                      <i className="far fa-envelope fa-2x"></i>
                    </a>  
                  </Button>
                </li>
                {
                  socials.map((obj, index) => {
                    return renderSocial(obj.href, obj.fontAwesome5, index+1, styleClasses.inline);
                  })
                }
              </ul>
            </div>
            
          </div>
        </div>  
      </div>
    </>
  )
}

export default Banner;