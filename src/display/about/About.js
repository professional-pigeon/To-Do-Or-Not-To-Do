import React from "react"
import { Container, Form, Button } from "react-bootstrap"


function About({ setAbout }) {
  return (
      <Container>
        <h2>Welcome!</h2>
        <p>This is a quick project to demonstrate react, drag and drop features, some custom css and also a very obvious run at making a similar to trello functioning.</p>
        <p>Things I'd like to keep adding</p>
        <ul>
          <li>A different view state for the todo, inProgress, and done columns</li>
          <li>Ability to add or delete a column</li>
          <li>Some sort of graphing of information to see how long it takes you to take a task from start to finish</li>
        </ul>
        <p>Thank you for checking out my project</p>
        <Button onClick={() => setAbout(false)}>go back</Button>
      </Container>
  )
}

export default About