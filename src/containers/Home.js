import React from 'react';
import Typography from 'antd/es/typography';
import Title from 'antd/es/typography/Title';
import Row from 'antd/es/row';
import Col from 'antd/es/col';

const Home = () => (
  <Row type="flex" justify="center">
    <Col span={12}>
      <Typography>
        <Title>Left the game begin with Reactibook</Title>
      </Typography>
    </Col>
  </Row>
);

export default Home;