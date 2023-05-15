import styled from "styled-components"

export const Container = styled.div`
    position: relative;
    height: 450px;

    .t800{
        border-radius: 50%;
        height: 185px;
        position: absolute;
        left: 15px;
        top: 32px;
        z-index: 3;
    }
    
    .cop{
        border-radius: 150px;
        width: 350px;
        position: absolute;
        z-index: 2;
        left: 200px;
        top: 150px;
    }
    
    .arrow{
        position: absolute;
        height: 175px;
        z-index: 4;
        rotate: 50deg;
        left: 220px;
        top: 0px;
    }
    
    .smiley{
        position: absolute;
        width: 150px;
        left: 450px;
        top: 30px;;
        rotate: -55deg;
    }
`