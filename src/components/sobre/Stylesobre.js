import styled from 'styled-components';

export const StyleContainer = styled.div`
    flex-direction: row;
    justify-content: center;
    width: 100%;
    @media(max-width:780px){
        width:100%;
        padding: 0px;
    };
`;

export const Box = styled.div`
    display: flex;
    margin: 7rem;
    color: rgb(12, 137, 1);
    border: 1px solid;
    border-radius: 25px;
    padding: 2%;

    @media(max-width:780px){
        display:block;
        width:100%;
        padding:0;
        border:none;
        margin:0;    
    };

    div {
        position: relative;
        border: 2px solid rgb(0, 0, 0);
        padding: 1%;
        border-radius: 20px;
        width: 50%;
        background: linear-gradient(15deg, rgb(4, 133, 25), transparent);
        margin:3px;
        font-size: 15px;
        @media(max-width:780px){
            width:85%;
            padding:5px;
            margin-left:35px
        };
    };
    img {
        border-radius: 15%;
        width: 100%;
    };
    h2, h3 {
        color: #fff;
        text-align: center;
    };
    p {
        color: #fff;
        font-size: 20px;
        text-align: center;
    };
`;

export const Paragrafo = styled.p`
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    color: rgb(12, 139, 1);
    display: flex;
    text-align:center;
    justify-content: center; 
`;