import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Footer = () => (
  <Tabs
    value={0}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="Item One" />
    <Tab label="Item Two" />
    <Tab label="Item Three" />
  </Tabs>
);

export default Footer;
