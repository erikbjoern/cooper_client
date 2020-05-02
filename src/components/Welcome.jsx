import React from 'react'
import { Header, Container, Divider } from 'semantic-ui-react'


const Welcome = ({renderLogin}) => {
  return (
    <Container align="center">
      <Divider/>
      <Header as="h1"> The Cooper Log </Header>
      <Divider/>
      {renderLogin}
    </Container>
  )
}

export default Welcome;
