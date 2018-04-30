import React from 'react';
import { Grid,Row,Col,Image,PageHeader,Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class HomeServiceCase extends React.Component {
    render() {
        return (
            <div>
              <Grid className="serviceCase">
                <Row>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/eventPlanning.png" />
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>Beauty up</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/shot.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>迅蚁无人机</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>英国墨菲公司</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>女装品牌</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>杭州继保南瑞科技有限公司</p>
                    </Thumbnail>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/eventPlanning.png" />
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>破壁机</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/shot.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>拓扑拖把</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>眼霜</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>百兴食品</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>橄榄油食品</p>
                    </Thumbnail>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/eventPlanning.png" />
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>简才</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/shot.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>指纹锁</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>工程三维合集</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>食品三维合集</p>
                    </Thumbnail>
                  </Col>
                  <Col xs={4}>
                    <Thumbnail>
                      <Image src="/assets/img/decorate.png"/>
                      <p className="text-center" style={{fontWeight:300,marginTop:20}}>产品三维合集</p>
                    </Thumbnail>
                  </Col>
                </Row>
              </Grid>
            </div>
        );
    }
};

module.exports =  HomeServiceCase;

