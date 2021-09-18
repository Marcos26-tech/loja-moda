import React from 'react';
import styled from 'styled-components';
import CarrocelComponent from '../CarrocelComponet';

const StyledContainer = styled.div`
  position: relative;
`;

function Home (){

  return(
    <>
    <StyledContainer>
        <CarrocelComponent/>
    </StyledContainer>
    </>
  );
}

export default Home;


