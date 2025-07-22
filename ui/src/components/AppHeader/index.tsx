import classnames from 'classnames/bind'
import { Switch } from 'antd'
import { useNavigate } from 'react-router'
import styles from './style.module.scss'
import { FC, ReactNode } from 'react'
import { AppLogo } from '../AppLogo'

const CN = 'app-header'
const CN_APP_LOGO = `${CN}-app-logo`

const cx = classnames.bind(styles)

interface IHeader {
  isDarkTheme: boolean
  setIsDarkTheme: (isDark: boolean) => void
  navigation: () => ReactNode
  userMenu: () => ReactNode
}

export const AppHeader: FC<IHeader> = ({ isDarkTheme, setIsDarkTheme, navigation, userMenu }) => {
  const navigate = useNavigate()
  const handleAppLogo = () => navigate('/')

  return (
    <header className={cx(CN)}>
      <div className={cx(CN_APP_LOGO)} onClick={handleAppLogo}>
        <AppLogo />
      </div>
      {navigation()}
      <Switch checked={isDarkTheme} onChange={setIsDarkTheme} />
      {userMenu()}
    </header>
  )
}
