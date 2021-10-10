import React from 'react';
import jojo from '../../img/grupo/jonathan.jpg';
import marcos from '../../img/grupo/MarcosMaciel.jpg';
import marcao from '../../img/grupo/MarcosVinicius.jpg';
import akemi from '../../img/grupo/Akemi.jpg';
import luan from '../../img/grupo/Luan.jpg';

import { StyleContainer, Box, Paragrafo } from './StyleSobre'

const Sobre = () => {

    return (
        <>
            <StyleContainer>
                <div>
                    <Paragrafo>Somos um grupo de estudantes universitários do curso de Análise e Desenvolvimento de Sistemas denominado Panace I.A </Paragrafo>
                </div>
                <Box>
                    <div>
                        <img src={jojo} alt="Jonathan Felix"> <a href="https://www.linkedin.com/in/jonathan-f%C3%A9lix-12a9881a0/"></a></img>
                        <h2>Jonathan Felix</h2>
                        <h3>Rm89352</h3>
                        <p>Banco de Dados</p>
                    </div>
                    <div>
                        <img src={luan} alt="Laun de Oliveira"><a href="https://www.linkedin.com/in/luan-oliveira-brito-sousa-b01793192/"></a></img>
                        <h2>Luan de Oliveira</h2>
                        <h3>Rm89352</h3>
                        <p>Banco de Dados</p>
                    </div>
                    <div>
                        <img src={marcos} alt="Marcos Maciel"><a href="https://www.linkedin.com/in/markomaciell/"></a></img>
                        <h2>Marcos Maciel</h2>
                        <h3>Rm88267</h3>
                        <p>AI & Chatbot</p>
                    </div>
                    <div>
                        <img src={marcao} alt="Marcos Vinicius "><a href="https://www.linkedin.com/in/marcosvmferreira/"></a></img>
                        <h2>Marcos Vinicius</h2>
                        <h3>Rm86904</h3>
                        <p>Gestor de Projetos</p>
                    </div>
                    <div>
                        <img src={akemi} alt="Akemi"><a href="https://www.linkedin.com/in/vitoria-akemi-tanimura-69561a1b2/"></a></img>
                        <h2>Vitoria Akemi</h2>
                        <h3>Rm88077</h3>
                        <p>Front End</p>
                    </div>
                </Box> 
            </StyleContainer> 
        </>  
    );
}
export default Sobre;
