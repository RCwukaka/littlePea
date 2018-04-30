import React from 'react';
import {Footer} from 'common-components';
import { Grid,Row,Col } from 'react-bootstrap';

class HomeFooter extends React.Component {

  render() {

    return (
      <Footer>
        <Grid>
          <Row>
            <p className="small text-center text-muted">
              Copyright 2017 浙江小豌豆网络有限公司 保留所有版权
            </p>
          </Row>
        </Grid>
      </Footer>
    );
  }
};

module.exports = HomeFooter;

