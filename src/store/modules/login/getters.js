// We do not use `state` directly for strong scalability.
export default {
  userInfo (state) {
    return state.userInfo
  },
  role (state) {
    return state.role
  },
  routes (state) {
    return state.routes
  },
  addRoutes (state) {
    return state.addRoutes
  }
}
