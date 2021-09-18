import React from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Master from './components/master/Master'
import styled from 'styled-components';


const StyledContainer = styled.div``;

function App() {
    return (
        <>
            <Master/>

            <StyledContainer>
                <Home/>
            </StyledContainer>

            <Footer/>
        </>
    );
}

export default App;