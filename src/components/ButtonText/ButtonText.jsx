import { Container } from './Styles.js'


export function ButtonText({ title, isActive=false, ...rest }) {
  return (
    <Container
     type='button'
     {...rest}
     isActive={isActive}
    >
        {title}
        
    </Container>  
  )
}