import React from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Typography,
  Divider,
} from 'antd'
import DynamoWrapper from './DynamoWrapper'

const {
  Paragraph,
  Title,
  Text,
} = Typography

const DynamoAppView = () => (
  <DynamoWrapper>
    <Title level={4}>
      Guidelines & Rules
    </Title>
    <Paragraph>
      Application name is require and follow kebab-case naming convention.
      <br />
      <Text strong>
        Examples : science-daily-news, notify-me, my-awesome-app, ...
      </Text>
      <br />
    </Paragraph>
    <Divider />
    <Form
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Application Name"
        name="appName"
        rules={[{
          required: true,
          message: 'Application name is require and follow kebab-case naming convention',
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="redux"
        valuePropName="checked"
      >
        <Radio.Group
          defaultValue="Redux"
        >
          <Radio value="Redux">With redux</Radio>
          <Radio value="Graphql">With graphql</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Dynamo your app
        </Button>
      </Form.Item>
    </Form>
    <Divider />
    <Paragraph>
      Dynamo will generate
      <Text strong> a zip </Text>
      with an app connected to redux or graphql :
      <Text strong>
        <br />
        * install required dependencies
        <br />
        * bootstrap app with redux or graphql
        <br />
        * create a test feature with architecture
      </Text>
    </Paragraph>
  </DynamoWrapper>
)

// propsType (validation)
DynamoAppView.propTypes = {

}

// default props
DynamoAppView.defaultProps = {

}

export default DynamoAppView
