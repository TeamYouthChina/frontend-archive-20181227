const type = {
  id: 'id',
  token: 'token',
  language: 'language'
};

const creator = (type, value = undefined) => {
  return {
    type,
    value
  };
};

export {type, creator};
