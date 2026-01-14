import React, { useEffect } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesAsync } from '../../redux/slices/mainSlice';

const Login = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.main.countries)
  console.log(countries)
  useEffect(() => {
    dispatch(getCountriesAsync())
  }, [dispatch])
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onChange = value => {
    console.log(`selected ${value}`);
  };
  const onSearch = value => {
    console.log('search:', value);
  };
  return (
    <div className='login'>
      <div className="content">
        <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path></svg><span>Back to home</span></Link>
        <div className="main">
          <div className="left">
            <h2>Apply for project</h2>
          </div>
          <Form
            form={form}
            onFinish={onFinish}
            layout='vertical'

          >
            <Row gutter={'16px'}>
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder='Your name' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Surname"
                  name="surname"
                  rules={[{ required: true, message: 'Please input your surname!' }]}
                >
                  <Input placeholder='Your surname' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: 'Email is required' },
                    { type: 'email', message: 'Please enter a valid email address' }
                  ]}
                >
                  <Input placeholder='Your email' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[{ required: true, message: 'Please input your country!' }]}
                >
                  <Select
                    showSearch={{ optionFilterProp: 'label', onSearch }}
                    placeholder="Select your country"
                    onChange={onChange}
                    options={countries.map((item) => ({
                      value: item.id,   
                      label: item.name,  
                    }))}
                  />
                </Form.Item>

              </Col>
              <Col span={24}>
                <Form.Item
                  label="Phone number"
                  name="phone"
                  rules={[
                    { required: true, message: 'Phone number is required' },
                    {
                      pattern: /^\+?[0-9\s-]{10,15}$/,
                      message: 'Invalid phone number format'
                    }
                  ]}
                >
                  <Input placeholder='+994555555555' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="Company name"
                  className="company"
                >
                  <Input placeholder='Your company name' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label="How did you hear about us?"
                  name="username"
                  className='text'
                >
                  <TextArea style={{ height: '145px' }} rows={4} placeholder="Leave us a message..." maxLength={6} />
                </Form.Item>

              </Col>
              <Col span={24}>
                <Form.Item label={null} >
                  <Button className='btn' htmlType="submit" style={{ width: '100%' }}>
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login