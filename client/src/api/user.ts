import { clientApi } from './clientApi'

// export const fetchUsersList = () => {
//   return get('users')
// }

export const fetchUsersList = async () => clientApi.get('users')
