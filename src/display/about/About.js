import React from "react"
import { Container, Form, Button } from "react-bootstrap"


function About({ setAbout }) {
  return (
      <Container>
        <p>this will be some text about how this works, myself and yada</p>
        <Button onClick={() => setAbout(false)}>go back</Button>
      </Container>
  )
}

export default About