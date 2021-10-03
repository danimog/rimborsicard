// This is `@middleware/router-auth.js`

export default function ({ store, redirect, route }) {
    store.state.user != null && route.name == 'login' ? redirect('/leggi-rimborsi') : ''
    store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
  }
  
  function isAdminRoute(route) {
    if (route.matched.some((record) => record.path == '/leggi-rimborsi')) {
      return true
    }
  }