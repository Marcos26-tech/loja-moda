import React, {Component} from 'react';
import CarrosselMasculino from './CarrosselMasculino';

import {Title, StyledContainer, Section} from './StyledMasculino';


class ModaMasculina extends Component {
  render() {
      return(
        <>
          <StyledContainer>
              <Section>
                <CarrosselMasculino />
                  <Title> Calça Femina listrada</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselMasculino />
                  <Title> Calça Femina listrada</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselMasculino />
                  <Title> Calça Femina listrada</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

        </>
      );
  }
}

export default ModaMasculina ;