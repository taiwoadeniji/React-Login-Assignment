import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalForm= () => (
  <Modal trigger={<Button>Show Modal</Button>}>
    <Modal.Header>Welcome John!!!</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>User Info</Header>
        <p>First Name: John</p>
        <p>Last Name: Thomas</p>
        <p>Email: Jthomas@gmail.com</p>
        <p>Phone Number: 123-567-8910</p>
        <p>Address: 10230 Jasper Avenue</p>
        <p>City: Edmonton</p>
        <p>Province: Alberta</p>
        <p>Country: Canada</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalForm
