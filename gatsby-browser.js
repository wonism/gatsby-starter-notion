import { globalHistory } from '@reach/router';

export const onInitialClientRender = () => {
  globalHistory._onTransitionComplete();
};
