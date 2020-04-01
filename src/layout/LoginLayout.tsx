import React from 'react';
import { Row, Col, Divider } from 'antd';
import '@/_microrules.less';

export default ({ children }) => {
  return (
    <Row justify="center" className='mt-4rem'>
      <Col xs={20} sm={20} md={12} lg={8}>
        {children}
      </Col>
    </Row>
  );
};
