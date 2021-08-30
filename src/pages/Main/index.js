import api from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import { Container, Title } from './styles';
import User from './User';

export default function Main() {
  return (
    <Container>
      <Title>Eslint Import</Title>
      <User />
    </Container>
  );
}
