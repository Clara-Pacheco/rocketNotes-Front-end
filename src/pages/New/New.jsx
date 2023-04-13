import { Container, Form } from './Styles'

import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'
import { Section } from '../../components/Section/Section'
import { NoteItem } from '../../components/NoteItem/NoteItem'

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

          <Section title="Links úteis">
            <NoteItem value="https://www.rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>  
          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>



        </Form>
      </main>
    </Container>
  )



}