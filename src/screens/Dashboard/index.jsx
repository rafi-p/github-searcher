import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
} from '../../components/index';
import {
  Container,
} from './style.js';
import {
  Images,
  Colors,
  FontStyles,
} from '../../constant/index';
import { LocalStorage } from '../../helpers/index';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

const Dashboard = props => {
  const dispatch = useDispatch();
  return (
    <Container>
      ini dashboard
    </Container>
  );
};

export default Dashboard;
