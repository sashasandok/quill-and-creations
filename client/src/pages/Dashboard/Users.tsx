import { useEffect, useState } from 'react'
import { Table } from 'antd'

import { IUser } from '@/interfaces'
import { usersColumns } from '@/constants'
import { useFetchUsers, useTableStyle } from '@/hooks'

export const DashboardUsers = () => {
  const { styles } = useTableStyle()
  const [dataSource, setDataSource] = useState<IUser[]>([])
  const { data } = useFetchUsers()

  useEffect(() => {
    if (data.length > 0) {
      const formattedData = data.map((user: IUser) => ({
        ...user,
        key: user._id,
      }))
      setDataSource(formattedData)
    }
  }, [data])

  return (
    <div>
      <h2>Dashboard Page</h2>
      <Table<IUser>
        className={styles.customTable}
        pagination={false}
        columns={usersColumns(
          () => alert('Edit User'),
          () => alert('Delete User')
        )}
        dataSource={dataSource}
        scroll={{ x: 'max-content' }}
      />
    </div>
  )
}
