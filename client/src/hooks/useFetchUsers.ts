import { useEffect, useState } from 'react'
import { fetchUsersList } from '@/api'

export const useFetchUsers = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError(null)
      try {
        const users = await fetchUsersList()
        setData(users.data.list)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return { data, loading, error }
}
