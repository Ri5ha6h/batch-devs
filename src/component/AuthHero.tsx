import { FC, memo } from 'react';

interface Props {}

const AuthHero: FC<Props> = (props) => {
  return (<div className="bg-black h-screen w-1/2 text-white"> This is company's logo</div>);
};

AuthHero.defaultProps = {};

export default memo(AuthHero);
