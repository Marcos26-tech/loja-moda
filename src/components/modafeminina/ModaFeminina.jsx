import React, {Component} from 'react';
import CarrosselFeminina from './CarrosselFeminina';
import CarrosselFeminina1 from './CarrosselFeminina1';
import CarrosselFeminina2 from './CarrosselFeminina2';
import CarrosselFeminina3 from './CarrosselFeminina3';
import CarrosselFeminina4 from './CarrosselFeminina4';
import CarrosselFeminina5 from './CarrosselFeminina5';
import CarrosselFeminina6 from './CarrosselFeminina6';
import CarrosselFeminina7 from './CarrosselFeminina7';
import CarrosselFeminina8 from './CarrosselFeminina8';


import {Title, StyledContainer, Section} from './StyleFeminana';


class ModaFeminina extends Component {
  render() {
      return(
        <>
          <StyledContainer>
              <Section>
                <CarrosselFeminina />
                  <Title>Chapéu Cores Cinza, Vermelho e Preto </Title>
                  <Title>Tamanho Unico</Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselFeminina1 />
                  <Title> Vestido Verão Estampados</Title>
                  <Title>Tamanhos disponíveis P, M, G </Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselFeminina2 />
                  <Title> Vestido Liso Cores Azul, Preto e Branco</Title>
                  <Title>Tamanhos disponíveis M, G</Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselFeminina3 />
                  <Title>Cropped manga longa Estampados</Title>
                  <Title>Tamanhos disponíveis P, M </Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselFeminina4 />
                  <Title> Calça Confort</Title>
                  <Title>Tamanhos disponíveis 38, 40</Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselFeminina5 />
                  <Title>Vestido Verão </Title>
                  <Title>Tamanhos disponíveis P, M, G </Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselFeminina6 />
                  <Title> Conjuntinho </Title>
                  <Title>Tamanho disponíveis M </Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          
              <Section>
                <CarrosselFeminina7 />
                  <Title> Vestido Longo Estampado</Title>
                  <Title>Tamanhos disponíveis P, M </Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
            
              <Section>
                <CarrosselFeminina8 />
                  <Title>Vestido Liso</Title>
                  <Title>Tamanho disponíveis P </Title>
                  <Title> Para comprar essa peça ligue (11) 995562134 </Title>
              </Section>
          </StyledContainer>
        </>
      );
  }
}
export default ModaFeminina;