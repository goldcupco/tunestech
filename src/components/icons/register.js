import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWallet,
  faMusic,
  faStar,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export const registerIcons = () => {
  library.add(faWallet, faMusic, faStar, faTimes);
};
