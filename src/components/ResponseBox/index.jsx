import { Container } from "./styles"
import { ResponseLine } from "../ResponseLine"

export function ResponseBox({formalText, hasStarted}){
    return(
        <Container>
            <div className="overlay">
            </div>
           {hasStarted && <ResponseLine formalText={formalText} />} 
        </Container>
    )
}