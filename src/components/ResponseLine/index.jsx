import { Container } from "./styles"
import botAvatar from "../../assets/botavatar.png"

export function ResponseLine({formalText}){
    return(
        <Container>
            <div className="avatar">
                <img src={botAvatar} alt="" />
                <span>T-800</span>
            </div>
            <p>{formalText ? formalText : "..."}</p>
        </Container>
    )
}