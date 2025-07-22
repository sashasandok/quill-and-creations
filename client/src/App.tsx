import { Link, Route, Routes } from 'react-router'
import { ConfigProvider, theme } from 'antd'
import { HomePage, DashboardPage } from '@admin/src/pages'
import { AppHeader } from '@ui/components'
import { useThemeStore } from './stores'

export const App = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeStore()

  const navigation = () => (
    <nav>
      <Link to="list">List</Link>
    </nav>
  )
  const userMenu = () => <div>User Menu</div>

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <main>
        <AppHeader
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          navigation={navigation}
          userMenu={userMenu}
        />
        <Routes>
          <Route index element={<HomePage />} />

          <Route path="dashboard">
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>
      </main>
    </ConfigProvider>
  )
}
