import { Container } from "./styles";
import { HeroHolder } from "../HeroHolder";

export function SideInfo() {
  return (
    <Container>
      <div className="sideContent">
        <div className="title">
          <h1>
            FORMALIZADOR <br />
            DO FUTURO
          </h1>
        </div>
        <HeroHolder />
        <div className="mainText">
          <span>
            a resistencia capturou e reprogramou um t-800 para ser professor em
            nosso tempo usando a inteligencia artificial da skynet. <br />
            <br />
            Infelizmente o custo de vida de um exterminador antes de ter sido
            inventado acaba sendo muito alto. Pensando nisso, nas horas vagas
            nosso heroi trabalha formalizando e corrigindo textos no chat ao
            lado para que voce nao passe vergonha com seus documentos e e-mails
            profissionais. Use com moderacao (serio, a openai cobra a cada
            request).
            <br />
            obs.: limitado a 100 tokens por request
          </span>
        </div>
      </div>
    </Container>
  );
}
