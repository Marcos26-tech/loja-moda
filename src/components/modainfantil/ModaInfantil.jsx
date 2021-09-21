import React, {Component} from 'react';
import CarrosselInfantil from './CarrosselInfantil';

import {Title, StyledContainer, Section} from './StyleInfanil';


class ModaInfantil extends Component {
  render() {
      return(
        <>
          <StyledContainer>
              <Section>
                <CarrosselInfantil />
                  <Title> Calça Femina listrada</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselInfantil />
                  <Title> Calça Femina listrada</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselInfantil />
                  <Title> Calça Femina listrada</Title>
                  <Title>Tamanho P, M, G, GG</Title>
                  <Title> Para Comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

        </>
      );
  }
}

export default ModaInfantil ;