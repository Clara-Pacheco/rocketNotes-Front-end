import { Container, Form } from './Styles'

import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'

export function New(){
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título"/>

        </Form>
      </main>
    </Container>
  )



}