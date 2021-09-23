import React, {Component} from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import CarrosselFeminina from './CarrosselFeminina';
import CarrosselFeminina1 from './CarrosselFeminina1';
import CarrosselFeminina2 from './CarrosselFeminina2';
import CarrosselFeminina3 from './CarrosselFeminina3';
import CarrosselFeminina4 from './CarrosselFeminina4';
import CarrosselFeminina5 from './CarrosselFeminina5';
import CarrosselFeminina6 from './CarrosselFeminina6';
import CarrosselFeminina7 from './CarrosselFeminina7';
import CarrosselFeminina8 from './CarrosselFeminina8';

import {Title, StyledContainer, Section, StyledTitulo, Span, IconeLike} from './StyleFeminana';

class ModaFeminina extends Component {
  render() {
      return(
        <>
          <StyledTitulo>"As roupas não vão mudar o mundo, as mulheres que as vestem vão"</StyledTitulo>
          <StyledContainer>
              <Section>
                <CarrosselFeminina />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Chapéu Cores Cinza, Vermelho e Preto </Title>
                  <Title>Tamanho Unico</Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselFeminina1 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Vestido Verão Estampados</Title>
                  <Title>Tamanhos disponíveis P, M, G </Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselFeminina2 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Vestido Liso Cores Azul, Preto e Branco</Title>
                  <Title>Tamanhos disponíveis M, G</Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselFeminina3 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Cropped manga longa Estampados</Title>
                  <Title>Tamanho disponível P </Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselFeminina4 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Calça Confort</Title>
                  <Title>Tamanhos disponíveis 38, 40</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselFeminina5 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Vestido Verão </Title>
                  <Title>Tamanhos disponíveis P, M, G </Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>

          <StyledContainer>
              <Section>
                <CarrosselFeminina6 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Biquínis</Title>
                  <Title>Tamanhos disponíveis  P, M </Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselFeminina7 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Vestido Longo Estampado</Title>
                  <Title>Tamanhos disponíveis P, M </Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselFeminina8 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Vestido Liso</Title>
                  <Title>Tamanho disponíveis P </Title>
                   <Title>Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>
        </>
      );
  }
}
export default ModaFeminina;