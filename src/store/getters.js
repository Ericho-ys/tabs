const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  roles: state => state.user.roles,
  device: state => state.app.device,
  permission_routers: state => state.permission.routers,
  avatar: state => state.user.avatar,
}

export default getters