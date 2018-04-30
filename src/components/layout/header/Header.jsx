import React from 'react';
import { Navbar,Nav,NavItem,Image,Button } from 'react-bootstrap';

class Header extends React.Component {
  render() {
      return (
        <Navbar className= 'navbar navbar-default navbar-embossed' collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Image src={require("../../../img/logo.png")}/>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight style={{marginTop:"20px"}}>
              <Button bsStyle="danger" bsSize="small">联系我们</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      );
    }
};
module.exports = Header;

