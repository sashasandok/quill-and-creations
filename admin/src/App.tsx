import { Route, Routes } from 'react-router'
import { HomePage, DashboardPage } from '@admin/src/pages'
import { AppHeader } from '@ui/components'

export const App = () => {
  const logo = () => <div>Logo</div>
  const navigation = () => <nav>Navigation</nav>
  const userMenu = () => <div>User Menu</div>

  return (
    <main>
      <AppHeader logo={logo} navigation={navigation} userMenu={userMenu} />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="dashboard">
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </main>
  )
}
