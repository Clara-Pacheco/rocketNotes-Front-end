import { Container, Brand, Search, Content, Menu, NewNote } from './Styles.js'

import { FiPlus} from 'react-icons/fi'

import { Header } from '../../components/Header/Header'
import { ButtonText } from '../../components/ButtonText/ButtonText'
import { Input } from '../../components/Input/Input'

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
        <Input />
      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>

    </Container>
  )
}