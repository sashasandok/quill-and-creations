import classnames from 'classnames/bind'

import styles from './style.module.scss'
import { FC, ReactNode } from 'react'

const CN = 'app-header'

const cx = classnames.bind(styles)

interface IHeader {
  logo: () => ReactNode
  navigation: () => ReactNode
  userMenu: () => ReactNode
}

export const AppHeader: FC<IHeader> = ({ logo, navigation, userMenu }) => {
  return (
    <header className={cx(CN)}>
      {logo()}
      {navigation()}
      {userMenu()}
    </header>
  )
}
