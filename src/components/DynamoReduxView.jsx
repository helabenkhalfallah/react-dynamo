import React from 'react'
import {
  Form,
  Input,
  Button,
  Divider,
  Typography,
  Checkbox,
  Radio,
} from 'antd'
import {
  PlusOutlined,
} from '@ant-design/icons'
import DynamoWrapper from './DynamoWrapper'

const { TextArea } = Input
const {
  Paragraph,
  Title,
  Text,
} = Typography

const DynamoReduxView = () => (
  <DynamoWrapper>
    <Title level={4}>
      Guidelines & Rules
    </Title>
    <Paragraph
      ellipsis={{ rows: 5, expandable: true }}
    >
      Feature name is require and follow kebab-case naming convention.
      <br />
      <Text strong>
        Examples : news, users, my-awesome-feature, ...
      </Text>

      <br />
      Page name is require and follow UpperCamelCase naming convention and must end with Page suffix.
      <br />
      <Text strong>
        Examples : TopNewsPage, UserDetailsPage, ...
      </Text>

      <br />
      Component is a pure functionnal component and name follow UpperCamelCase naming convention.
      <br />
      Accepted Component suffix :
      <br />
      - View
      <br />
      - List
      <br />
      - Table
      <br />
      - TableRow
      <br />
      - Row

      <br />
      <Text strong>
        Examples : TopNewsList, TopNewsRow, UserDetailsView, ...
      </Text>

      <br />
      Service name follow UpperCamelCase naming convention and must end with Service suffix.
      <br />
      <Text strong>
        Examples : TopNewsService, SubmitUserInfoService, ...
      </Text>
    </Paragraph>
    <Divider />
    <Form
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        label="Feature Name"
        name="featureName"
        rules={[{
          required: true,
          message: 'Feature name is require and follow kebab-case naming convention',
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Page Name"
        name="pageName"
        rules={[{
          required: true,
          message: 'Page name is require and follow UpperCamelCase naming convention and must end with Page suffix',
        }]}
      >
        <Input />
      </Form.Item>
      <Divider />
      <Text underline>
        Components
      </Text>
      <Form.Item
        label="Component Name"
        name="componentName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Insert JSON to be converted to PropTypes"
        name="propTypes"
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="Component Actions"
        name="componentOutput"
        valuePropName="checked"
      >
        <Radio.Group
          defaultValue="onClick"
        >
          <Radio value="onClick">onClick</Radio>
          <Radio value="onChange">onChange</Radio>
          <Radio value="onItemClick">onItemClick</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="componentLocalized"
        valuePropName="checked"
      >
        <Checkbox>Localized Component</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="danger"
          icon={<PlusOutlined />}
          size="large"
        >
          Add new Component
        </Button>
      </Form.Item>

      <Divider />
      <Text underline>
        Services
      </Text>
      <Form.Item
        label="Action Name"
        name="actionName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Service Name"
        name="serviceName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Service output data name"
        name="serviceOutput"
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button
          type="danger"
          icon={<PlusOutlined />}
          size="large"
        >
          Add new Service
        </Button>
      </Form.Item>

      <Divider />
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >
          Dynamo your page
        </Button>
      </Form.Item>
    </Form>
    <Divider />
    <Paragraph
      ellipsis={{ rows: 5, expandable: true }}
    >
      Dynamo will generate
      <Text strong> a zip </Text>
      with a page connected to redux :
      <Text strong>
        <br />
        * install required dependencies
        <br />
        * create saga services and attach them to reducers (services folder)
        <br />
        * create reducers and actions (redux folder)
        <br />
        * create Redux Provider and Dispatcher (redux folder)
        <br />
        * create ReducerRoot and SagaRoot (commons folder)
      </Text>
      <br />
      <Text
        strong
        type="danger"
      >
        Important :
      </Text>
      <br />
      * Each service has its own : reducer, action, service file.
      <br />
      * Dynamo will generate required files you have only to copy/update files on your generated redux app.
    </Paragraph>
  </DynamoWrapper>
)

// propsType (validation)
DynamoReduxView.propTypes = {

}

// default props
DynamoReduxView.defaultProps = {

}

export default DynamoReduxView
