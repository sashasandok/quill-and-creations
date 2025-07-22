import { Link, Route, Routes } from 'react-router'
import { Button, ConfigProvider, theme } from 'antd'
import { HomePage, DashboardPage } from '@admin/src/pages'
import { AppHeader } from '@ui/components'
import { useThemeStore } from './stores'

export const App = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeStore()

  const navigation = () => (
    <nav>
      <Link to="dashboard">dashboard</Link>
    </nav>
  )
  const userMenu = () => <div>User Menu</div>

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <main
        style={{
          backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
          minHeight: '100vh',
          transition: 'background-color 0.3s ease',
        }}
      >
        <AppHeader
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          navigation={navigation}
          userMenu={userMenu}
        />
        <Button>Test Button</Button>
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
