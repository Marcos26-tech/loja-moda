import React, {Component} from 'react';
import {FiPhoneCall} from 'react-icons/fi';
import CarrosselInfantil from './CarrosselInfantil';
import CarrosselInfantil1 from './CarrosselInfantil1';
import CarrosselInfantil2 from './CarrosselInfantil2';
import CarrosselInfantil3 from './CarrosselInfantil3';
import CarrosselInfantil4 from './CarrosselInfantil4';
import CarrosselInfantil5 from './CarrosselInfantil5';
import CarrosselInfantil6 from './CarrosselInfantil6';
import CarrosselInfantil7 from './CarrosselInfantil7';
import CarrosselInfantil8 from './CarrosselInfantil8';


import {Title, StyledContainer, Section, StyledTitulo, Span, IconeLike} from './StyleInfanil';


class ModaInfantil extends Component {
  render() {
      return(
        <>
          <StyledTitulo>"Se eu tivesse te desenhado e te encomendado, teria feito exatamente assim."</StyledTitulo>
          <StyledContainer>
              <Section>
                <CarrosselInfantil />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Tocas Infantil Unisex </Title>
                  <Title>Tamanho disponível P</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselInfantil1 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Conjuntos Bebe </Title>
                  <Title>Tamanho disponível 01</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselInfantil2/>
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Body Bebe Estampado</Title>
                  <Title>Tamanho disponível 01</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>
          <StyledContainer>
              <Section>
                <CarrosselInfantil3 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Conjunto Feminino infantil</Title>
                  <Title>Tamanhos disponíveis P, M, G</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselInfantil4 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Cardgan Feminino</Title>
                  <Title>Tamanhos disponíveis 07 e 10</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselInfantil5/>
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Conjunto Feminino infantil</Title>
                  <Title>Tamanhos disponíveis 08, 10 e 12</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>
          <StyledContainer>
              <Section>
                <CarrosselInfantil6 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Conjunto Masculino Infantil</Title>
                  <Title>Tamanhos disponíveis 10, 12 e 14</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          
              <Section>
                <CarrosselInfantil7 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>   
                  <Title>Conjunto Masc cores Branco, Azul e Vermelho</Title>
                  <Title>Tamanhos disponíveis P, M, G, GG</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
            
              <Section>
                <CarrosselInfantil8 />
                  <Span> 
                    <input type="checkbox" name="name" value=""></input>
                    <IconeLike className="tw-heart"></IconeLike>
                  </Span>
                  <Title>Conjunto Femin cores Branco, Rosa e Vermelho</Title>
                  <Title>Tamanhos disponíveis P, M, G</Title>
                   <Title> Para Comprar ligue<a href="tel:(11)985156126"><FiPhoneCall /> (11) 98515612</a></Title>
              </Section>
          </StyledContainer>

        </>
      );
  }
}
export default ModaInfantil ;