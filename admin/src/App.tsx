import { Route, Routes } from 'react-router'
import { HomePage, DashboardPage } from '@/pages'
import { AppHeader } from '@ui'

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
