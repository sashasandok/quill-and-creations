import { IUser } from '@/interfaces'
import classNames from 'classnames/bind'
import { Table } from 'antd'
import type { TableColumnsType } from 'antd'
import { createStyles } from 'antd-style'
import styles from './style.module.scss'

const CN = 'table-wrapper'
// const CN_APP_LOGO = `${CN}-app-logo`

const cx = classNames.bind(styles)

export const UsersTable = ({ data, dataSource }: { data: IUser[]; dataSource: IUser[] }) => {
  return (
    <Table<IUser>
      className={styles.customTable}
      pagination={false}
      columns={data}
      dataSource={dataSource}
      scroll={{ x: 'max-content' }}
    />
  )
}
