import { Container, Brand, Search, Content, Menu, NewNote } from './Styles.js'

import { FiPlus, FiSearch} from 'react-icons/fi'

import { Header } from '../../components/Header/Header'
import { ButtonText } from '../../components/ButtonText/ButtonText'
import { Input } from '../../components/Input/Input'
import { Section } from '../../components/Section/Section'
import { Note } from '../../components/Note/Note'

export function Home(){

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>

        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Frontend" /></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React" /></li>
      
      </Menu>

      <Search>
        <Input placeholder = "Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title= "Minhas notas">
          <Note data={
            {
              title: 'React Modal',
              tags: [
                {id: '1', name: 'react'}
              ]
            }
          } 
          />

          <Note data={
            {
              title: 'Exemplo de Middleware',
              tags: [
                {id: '1', name: 'express'},
                {id: '2', name: 'nodejs'}
              ]
            }
          } 
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>

    </Container>
  )
}