<<<<<<< HEAD
import React, { Component } from 'react';
import Carrocel from './Carrocel';

import { Title, StyledContainer, Section } from './Stylehome';

class Home extends Component {
  render() {
    return (
      <>
        <Section>
          <Title>Sejam Bem-vindos à Loja Moda Panace I.A!</Title>
          <Title>“As pessoas mais jovens costumam abusar da criatividade e,
            se você for desse tipo, use-a com sabedoria. Seja estiloso e crie a sua moda!”</Title>
        </Section>
        <StyledContainer>
          <Carrocel />
        </StyledContainer>
      </>
    );
=======
import React, {Component} from 'react';
import Carrossel from './Carrossel';

import {Title, StyledContainer, Section} from './StyledHome';

class Home extends Component {
  render() {
      return(
        <>
          <Section>
            <Title>Sejam Bem vindos a Loja Moda Panace I.A</Title>
            <Title>“Existem pessoas que costumam abusar da criatividade e,
               se você for desse tipo, use-a com sabedoria. Seja estiloso e crie a sua moda!”</Title>
          </Section>
          <StyledContainer>
              <Carrossel />
          </StyledContainer>
        </>
      );
>>>>>>> f2a286c9d47bbbd09d72e629beffc3e19dd75714
  }
}
export default Home;


