import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = () => (
  <AppBar position="static" color="default">
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </AppBar>
);

export default Footer;
