const type = {
  global: {
    authentication: 'global.authentication'
  },
  saga: {
    initialize: 'saga.initialize',
    login: 'saga.login',
    logout: 'saga.logout',
  }
};

const creator = (type, value = undefined) => {
  return {
    type,
    value
  };
};

export {type, creator};
