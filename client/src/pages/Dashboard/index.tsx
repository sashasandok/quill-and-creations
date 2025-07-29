import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Link, Outlet } from 'react-router'

const { Sider, Content } = Layout

export const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: 'calc(100vh - 42px' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" /> {/* Add your logo here */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/dashboard/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/dashboard/users">Navigation 2</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
