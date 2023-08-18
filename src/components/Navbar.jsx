import {Button, Container, Navbar, Modal} from 'react-bootstrap'


const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand='sm'>
        <Navbar.Brand href= '/'>Tero Bau ko Pasal</Navbar.Brand> 
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Button>
                Cart 0 Items
            </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
