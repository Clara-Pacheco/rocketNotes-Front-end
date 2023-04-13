import { Container, Form } from './Styles'

import { Header } from '../../components/Header/Header'
import { Input } from '../../components/Input/Input'
import { Textarea } from '../../components/Textarea/Textarea'
import { Section } from '../../components/Section/Section'
import { NoteItem } from '../../components/NoteItem/NoteItem'
import { Button } from '../../components/Button/Button'

import { Link } from 'react-router-dom'

export function New(){
  return (
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
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
              <NoteItem value="NodeJS" />
              <NoteItem value="Sql" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Button title='Salvar' />


        </Form>
      </main>
    </Container>
  )



}