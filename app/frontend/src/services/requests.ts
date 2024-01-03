import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001'
})

export const getRequest = async (endpoint: string): Promise<[]> => {
  const { data } = await api.get(endpoint)
  return data
}

export const setRequest = async (endpoint: string, body: object): Promise<string> => {
  const { data } = await api.post(endpoint, body)
  return data
}

export const deleteRequest = async (endpoint: string, body: object): Promise<string> => {
  const { data } = await api.delete(endpoint, body)
  return data
}

export default api
