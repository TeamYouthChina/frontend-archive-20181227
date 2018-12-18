import {store} from '../data/store.js';

const languageHelper = () => {
  switch (store.getState().language) {
    case 'en_US':
      return 1;
    default: // 'zh_CN'
      return 0;
  }
};

export {languageHelper};
