import React from 'react';
import { Form, Input, Button, DatePicker, Row, Col, Select } from 'antd';
import { countries, englishLevel } from '@/pages/user/constants';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: {
    offset: 8, span: 16,
  },
};

const UserRegister = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const validator = {
    require: {
      required: true,
      message: 'Required',
    },
  };

  const initialValues = { phone: '17775551122' };

  return (
    <>
      <Row>
        <Col span={8}>
        </Col>

        <Col span={16}>
          <h1>Register</h1>
        </Col>
      </Row>

    <Form
      {...layout}
      // name="basic"
      size='large'
      initialValues={initialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[validator.require]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="First Name"
        name="lastName"
        rules={[validator.require]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Cell phone number"
        name="phone"
        rules={[validator.require]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[validator.require]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{
          required: true,
          message: 'Please input your password!',
        }]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item name={['about']} label="About">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={['goals']} label="My goals">
        <Input.TextArea />
      </Form.Item>


      <Form.Item
        name="country"
        label="Country"
        hasFeedback
        rules={[{ required: true, message: 'Please select your country!' }]}
      >
        <Select
          showSearch
          placeholder="Please select a country"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {countries.map(el => <Option value={el}>{el}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item
        name="englishLevel"
        label="English Level"
        hasFeedback
        rules={[{ required: true, message: 'Please select your English Level!' }]}
      >
        <Select
          showSearch
          placeholder="Please select an English Level"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }>
          {englishLevel.map(el => <Option value={el}>{el}</Option>)}
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default UserRegister;
