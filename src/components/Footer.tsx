import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { HomeRounded, ManageSearchRounded, PeopleRounded, SettingsRounded } from '@mui/icons-material';

const useStyles = makeStyles({
  navigation: {
    fontFamily: 'Noto Sans KR',
  },
  action: {
    backgroundColor: 'black',
  },
});

// https://stackoverflow.com/questions/54375096/styling-bottomnavigation-in-react-js-material-ui

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.navigation}
    >
      <BottomNavigationAction className={classes.action} label="Home" icon={<HomeRounded />} />
      <BottomNavigationAction className={classes.action} label="모임 탐색" icon={<ManageSearchRounded />} />
      <BottomNavigationAction className={classes.action} label="모임 관리" icon={<PeopleRounded />} />
      <BottomNavigationAction className={classes.action} label="계정" icon={<SettingsRounded />} />
    </BottomNavigation>
  );
};

export default Footer;
