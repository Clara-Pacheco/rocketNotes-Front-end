import { Container, Links} from "./styles"

import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import { Section } from "../../components/Section/Section"

export function Details() {
  return(
    <Container >
      <Header />
      <Section title="Links úteis">
      <Links>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>
          <li><a href="#">https://www.rocketseat.com.br</a></li>   
      </Links>
      </Section>

      <Section title="Marcadores">
        <li>express</li>
        <li>nodejs</li>
      </Section>


      <Button title = 'Voltar'/>
      
    </Container>
  )
   

}

