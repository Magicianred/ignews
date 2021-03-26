import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styless from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styless.sigInButton}>
      <FaGithub color="#04d361" />
      Igor Marchi
      <FiX color="#737380" className={styless.closeIcon} />
    </button>
  ) : (
    <button className={styless.sigInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
