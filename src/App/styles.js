import styled from "styled-components"
import terminator from "../assets/terminator_font.ttf"

export const Container = styled.div`
    
    display: flex;   
    
    

    @font-face {
        font-family: terminator;
        src: url(${terminator});
    }

    .main{
        padding: 32px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    button{
        padding: 15px;
        height: 100%;
        border-radius: 8px;
        font-size: 15px;
        font-family: 'Roboto Mono';
        color: white;
        border: none;
        background-color: rgba(173, 6, 3, 0.1);
        cursor: pointer;

        box-shadow:
        0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 2px #ffa500, 0 0 4px #ffa500, 0 0 5px #ff0000, 0 0 5px #ff8d00, 0 0 1px #ff0000;
        color: #fff6a9;

        &:hover{
            box-shadow:
                0 0 3px #ffa500, 0 0 5px #ffa500, 0 0 8px #ffa500, 0 0 4px #ffa500, 0 0 6px #ff0000, 0 0 8px #ff8d00, 0 0 1px #ff0000;
                color: #fff6a9;
        }

        &:disabled{
            color: gray;

            &:hover{
               box-shadow: 0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 2px #ffa500, 0 0 4px #ffa500, 0 0 5px #ff0000, 0 0 5px #ff8d00, 0 0 1px #ff0000;
               cursor: not-allowed;
            }
        }

    }

    .inputBox{
        width: 850px;
        display: flex;
        align-items: end;
        gap: 8px;
        
    }

    textarea{
        width: 850px;
        height: 195px;
        padding: 18px 24px;
        resize: none;
        background-color: rgba(173, 6, 3, 0.1);
        border: none;
        border-radius: 8px;
        color: white;
        font-family: 'Roboto Mono';
        font-size: 18px;

        &:focus{
            outline: none;
        }
        box-shadow:
        0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 2px #ffa500, 0 0 4px #ffa500, 0 0 5px #ff0000, 0 0 5px #ff8d00, 0 0 1px #ff0000;
        color: #fff6a9;
    }

    .mobileTitle{
        display: none;
    }

    @media (max-width: 1513px){
        height: 100vh;
        width: 90vw;
        margin: 0 auto;
        flex-direction: column;

        .inputBox{
            width: 90vw;
            padding: 0 33px;
        }

        .main{
            height: 100%;
        }

        textarea{
            width: 100%;
        }


        .mobileTitle{
            display: block;
            font-family: terminator;
            font-size: 32px;
            filter: drop-shadow(3px 3px 0px rgb(173, 6, 3));   
            padding: 20px 0 0 35px; 
        }

    }

    @media (max-width: 750px) {

        .mobileTitle{
            font-size:24px;
            padding: 36px 0 0 15px;
        }

        .inputBox{
            height: 125px;
            flex-direction: column;
            align-items: center;
            width: 97vw;
        }

        textarea{
            padding: 8px;
            height: 100%;
            font-size: 16px;
        }

        .main{
            padding: 32px 8px;
        }

        button{
            height: 35px;
            padding: 5px;
        }

    } 


`