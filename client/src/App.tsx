import { Link, Route, Routes } from 'react-router'
import { ConfigProvider, theme } from 'antd'
import { HomePage, DashboardPage } from '@/pages'
import { AppHeader } from '@/components'
import { useThemeStore } from '@/stores'

export const App = () => {
  const { isDarkTheme, setIsDarkTheme } = useThemeStore()

  const navigation = () => (
    <nav>
      <Link to="list">List</Link>
    </nav>
  )

  const userMenu = () => <div>User Menu</div>

  console.log('isDarkTheme', isDarkTheme)

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
