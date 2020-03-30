import React from 'react';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default ({children}) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
