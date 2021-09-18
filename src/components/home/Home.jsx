import React, {Component} from 'react';
import CarrocelComponent from './CarrocelComponet';

import {Title} from './style_home';
import { StyledContainer } from './style_home';


class Home extends Component {
  render() {
      return(
        <>
          <section>
            <Title>Sejam Bemvidos a Loja Moda Panace I.A</Title>
            <Title>“As pessoas mais jovens costumam abusar da criatividade e,
               se você for desse tipo, use-a com sabedoria. Seja estiloso e crie a sua moda!”</Title>
          </section>
          <StyledContainer>
              <CarrocelComponent />
          </StyledContainer>
        </>
      );
  }
}
export default Home;


