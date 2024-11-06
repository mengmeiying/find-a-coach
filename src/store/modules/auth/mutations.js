export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.iserId = payload.iserId;
    state.tokenExpiration = payload.tokenExpiration;
  }
}