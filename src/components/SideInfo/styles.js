import styled from "styled-components"
import background from "../../assets/background.jpg"

export const Container = styled.div`
    
    max-width: 600px;
    min-width: 600px;
    height: 100vh;
    background: url(${background});
    background-size: 100% 100%;
    z-index: 4;
    
    overflow-y: scroll;
    overflow-x: hidden;
    
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.7);
        border-radius: 5px;
    }

    .sideContent{
        h1{
            font-family: terminator, sans-serif;
            font-size: 32px;
            filter: drop-shadow(3px 3px 0px rgb(173, 6, 3));    
        }
    }

    .title{
        display: flex;
        width: 100%;
        height: 125px;
        align-items: center;
        justify-content: center;
    }
    
    .mainText{
        width: 100%;
        padding: 0 30px;
        font-family: terminator;
        span{
            filter: drop-shadow(3px 3px 0px black);
        }
        margin-bottom: 36px;
    }

    @media (max-width: 1513px){
        display: none;
    }
`