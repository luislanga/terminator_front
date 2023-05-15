import styled from "styled-components"

export const Container = styled.div`

    height: 75%;
    width: 850px;
    align-items: start;

    padding: 24px 36px;

    border: 2px solid rgba(173, 6, 3, 0.60);
    border-radius: 8px;

    box-shadow:
    0 0 1px #ffa500, 0 0 1px #ffa500, 0 0 2px #ffa500, 0 0 4px #ffa500, 0 0 5px #ff0000, 0 0 5px #ff8d00, 0 0 1px #ff0000;
        color: #fff6a9;

    
    overflow: hidden;
    position: relative;
    .overlay{
        animation: slide 20s infinite linear;

        background: linear-gradient(
            rgba(173, 6, 3, 0.25) ,
            rgba(173, 6, 3, 0.25) 2px,
            rgba(173, 6, 3, 0.1) 2px,
            rgba(173, 6, 3, 0.1) 15px
            );
           
        background-size: 100% 5px;
        height: 100%;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        
        pointer-events: none;
    }

    font-family: 'Roboto Mono';
    font-size: 18px;

    @keyframes slide {
        from {
            background-position: 0% 0%;
        }

        to {
            background-position: 0% -100%;
        }
    }
        
    z-index: 1;

    @media (max-width: 1513px){
        width: 100%;
    }

    @media (max-width: 750px) {
        font-size: 12.5px;
        padding: 15px 20px;
    }
`