import React from 'react';
import HeadBanner from '../headBanner/HeadBanner';
import Layout from '../layout/Layout';
import HomeServiceCase from '../homeServiceCase';
import {StoryList} from '../common';
import { Grid,Row,Col } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
          <Layout>
            <HeadBanner/>
            <Grid>
                <hr style={{opacity:'0.4',border:"1px solid #464954"}}></hr>
               <Row>
                  <blockquote class="blockquote color-red"><h4 class="color-red ft-bd lh40 ft40">广泛服务</h4></blockquote>
               </Row>
            </Grid>
            <HomeServiceCase/>
            <Grid>
               <Row>
                  <blockquote class="blockquote color-red"><h4 class="color-red ft-bd lh40 ft40">公司文化</h4></blockquote>
               </Row>
                
            </Grid>
            <Grid>
               <Row>
                  <blockquote class="blockquote color-red"><h4 class="color-red ft-bd lh40 ft40">公司历程</h4></blockquote>
               </Row>
                <Row>
                    <Col xs={10}>
                        <StoryList/>
                    </Col>
                </Row>
            </Grid>

            <Grid>
               <Row>
                  <blockquote class="blockquote color-red"><h4 class="color-red ft-bd lh40 ft40">公司团队</h4></blockquote>
               </Row>
                
            </Grid>
          </Layout>
        );
    }
};

module.exports =  Home;


