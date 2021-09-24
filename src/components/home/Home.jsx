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
  }
}
export default Home;


