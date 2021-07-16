import { FC, memo } from 'react';
import shield from '../images/shield.webp';

interface Props {}

const AuthHero: FC<Props> = (props) => {
  return (
    <div className="items-center justify-center hidden w-1/2 h-screen min-h-full bg-gray-900 lg:flex">
      <img
        className="object-cover w-2/3 h-3/3"
        src={shield}
        alt="shield logo"
      />
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
