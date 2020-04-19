import React, { Component } from 'react'
import {
  Tabs,
  Layout,
  Row,
  Col,
  Typography,
} from 'antd'
import {
  AppstoreAddOutlined,
  RocketOutlined,
  RobotOutlined,
  FireFilled,
} from '@ant-design/icons'
import {
  DynamoAppView,
  DynamoReduxView,
  DynamoGQLView,
} from './components'
import 'antd/dist/antd.css'

const {
  TabPane,
} = Tabs

const {
  Title,
} = Typography

const {
  Header,
  Content,
  Footer,
} = Layout

class DynamoHomePage extends Component {
  // propsType (validation)
  static propTypes = {

  }

  // default props
  static defaultProps = {

  }

  componentDidMount() {

  }

  render() {
    return (
      <Layout>
        <Header
          style={{
            backgroundColor: 'white',
            height: '4rem',
            verticalAlign: 'middle',
          }}
        >
          <Row
            justify="start"
            align="bottom"
          >
            <Col span={2}>
              <FireFilled
                style={{ fontSize: '2rem' }}
              />
            </Col>
            <Col span={16}>
              <Title>
                React Dynamo
              </Title>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row
            justify="space-around"
            align="middle"
            gutter={[2, 2]}
          >
            <Col span={20}>
              <Tabs
                defaultActiveKey="1"
                animated={false}
                size="large"
              >
                <TabPane
                  tab={(
                    <span>
                      <AppstoreAddOutlined />
                      Application
                    </span>
                  )}
                  key="1"
                >
                  <DynamoAppView />
                </TabPane>
                <TabPane
                  tab={(
                    <span>
                      <RocketOutlined />
                      Page with Redux - Saga
                    </span>
                  )}
                  key="2"
                >
                  <DynamoReduxView />
                </TabPane>
                <TabPane
                  tab={(
                    <span>
                      <RobotOutlined />
                      Page with graphql (Apollo)
                    </span>
                  )}
                  key="3"
                >
                  <DynamoGQLView />
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Content>
        <Footer
          style={{
            backgroundColor: 'black',
            height: '5rem',
          }}
        >
          Footer
        </Footer>
      </Layout>
    )
  }
}

export default DynamoHomePage
