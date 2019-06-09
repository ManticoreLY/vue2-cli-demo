const getters = {
  menus: state => state.menu.menus,
  token: state => state.user.token,
  medicines: state => state.data.medicines,
  diseases: state => state.data.diseases
}

export default getters
