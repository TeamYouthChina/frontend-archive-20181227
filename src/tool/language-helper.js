import {store} from '../data/store.js';

const languageHelper = () => {
  const language = store.getState().language;
  switch (store.getState().language) {
    case 'en_US':
      return 1;
    default: // 'zh_CN'
      return 0;
  }
};

export {languageHelper};
