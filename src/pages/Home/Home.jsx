import { Container, Brand, Search, Content, Menu, NewNote } from './Styles.js'

import { Header } from '../../components/Header/Header'

export function Home(){

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>

      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>

      </NewNote>

    </Container>
  )
}