import React from 'react';
import { Row,Col,Grid } from 'react-bootstrap';


class Main extends React.Component{
    render() {
      const { children } = this.props;
      return (
        <div id='main' style={{minHeight:900}}>
          {this.props.children}
        </div>
      );
    }
};

module.exports =  Main;

