import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { type MenuProps, Dropdown, Space, Typography } from 'antd'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Item 1',
  },
  {
    key: '2',
    label: 'Item 2',
  },
  {
    key: '3',
    label: 'Item 3',
  },
]

export const UserMenu: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
    }}
  >
    <Typography.Link>
      <Space>
        Selectable
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
)
