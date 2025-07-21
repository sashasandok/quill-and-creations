import { Route, Routes } from 'react-router'
import { HomePage, DashboardPage } from '@admin/src/pages'
import { AppHeader } from '@ui/components'

export const App = () => {
  return (
    <main>
      <AppHeader />
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="dashboard">
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </main>
  )
}
