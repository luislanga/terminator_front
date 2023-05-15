import { styled } from "styled-components"

export const Container = styled.div`
    display: flex;
    gap: 24px;
    
    p{
        filter: sepia(100%) saturate(300%) brightness(90%) hue-rotate(320deg);
        z-index: -1;
        
        text-shadow: 
        0 0 1px #ffa500, 0 0 2px #ffa500, 0 0 4px #ffa500, 0 0 6px #ffa500, 0 0 8px #ff0000, 0 0 5px #ff8d00, 0 0 1px #ff0000;
        color: #fff6a9;
    }
    
    img{
        height: 100px;
        filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(285deg);
        border: 1px solid red;
        border-radius: 10px;
        z-index: -1;
        
    }

    .avatar{
        z-index: -1;
    }

    span{
        display: block;
        width: 100%;
        text-align: center;
        font-family: terminator;
        font-size: 15px;
        margin-top: 5px;
        filter: sepia(100%) saturate(300%) brightness(90%) hue-rotate(320deg);
        text-shadow: 
        0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 3px #ff0000, 0 0 2px #ff8d00, 0 0 1px #ff0000;
        color: #fff6a9;
    }

    @media (max-width: 750px){

        gap: 15px;

        img{
            height: 75px;
        }

        span{
            font-size: 11px;
        }


    }

`