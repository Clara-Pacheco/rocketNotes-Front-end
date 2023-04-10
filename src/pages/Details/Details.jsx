import { Container, Links} from "./styles"

import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import { Section } from "../../components/Section/Section"
import { Tag } from "../../components/Tag/Tag"
import { ButtonText } from "../../components/ButtonText/ButtonText"

export function Details() {
  return(
    <Container >
      <Header />
      <main>
        <Content>
          <ButtonText title='Excluir a nota'/>
          <Section title="Links úteis">
          <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>   
          </Links>
          </Section>

          <Section title="Marcadores">
            <Tag  title="express" />
            <Tag  title="nodejs" />
          </Section>


          <Button title = 'Voltar'/>
        </Content>
      </main>
    </Container>
  )
   

}

