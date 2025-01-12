export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.iserId = payload.iserId;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
}