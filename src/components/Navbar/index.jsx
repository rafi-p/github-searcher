import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Images, Colors, FontStyles } from '../../constant/index';
import { LocalStorage } from '../../helpers/index';
import {
} from '../../components/index';
import {
} from '../index';
import {
  Container
} from './style.js';


const NavbarComponent = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <Container>
      NAVBAR
    </Container>
  );
};

export default NavbarComponent;
