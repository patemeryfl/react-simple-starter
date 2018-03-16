const store = {
  state: {
    user: null,
  },
  actions: {
    getUser: async () => {
      const response = await fetch('https://api.github.com/users/patemeryfl');
      const body = response.json();
      return { user: { name: body.display } };
    },
  },
};

export default store;

