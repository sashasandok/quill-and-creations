import { IUser } from '@/interfaces'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { TableColumnsType } from 'antd'

export const usersColumns = (
  handleEdit: () => void,
  handleDelete: () => void
): TableColumnsType<IUser> => [
  {
    title: 'Name',
    width: 100,
    dataIndex: 'username',
    key: 'username',
    fixed: 'left',
  },
  {
    title: 'Email',
    width: 100,
    dataIndex: 'email',
    key: 'email',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Role',
    width: 100,
    dataIndex: 'role',
    key: 'role',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Password',
    width: 100,
    dataIndex: 'password',
    key: 'email',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Status',
    width: 100,
    dataIndex: 'status',
    key: 'status',
    fixed: 'left',
    sorter: true,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => (
      <div>
        <EditOutlined onClick={handleEdit} />
        <DeleteOutlined onClick={handleDelete} />
      </div>
    ),
  },
]
