import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

class Layout extends React.Component{
    render() {
      const { children } = this.props;
      return (
          <div>
              <Header/>
              <Main>
                {children}
              </Main>
              <Footer/>
          </div>
      );
    }
};

module.exports = Layout;