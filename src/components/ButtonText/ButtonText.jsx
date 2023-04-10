import { Container } from './Styles.js'


export function ButtonText({ title, ...rest }) {
  return (
    <Container type='button' {...rest}>
        {title}
    </Container>  
  )
}