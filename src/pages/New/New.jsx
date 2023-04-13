import { Container, Form } from './Styles'

import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'

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
          <Textarea placeholder="Observações" />

        </Form>
      </main>
    </Container>
  )



}