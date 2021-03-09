import request from '@/utils/axios-request'

export function login(username, password) {
  return request({
    url: '/api/komodo/admin/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
