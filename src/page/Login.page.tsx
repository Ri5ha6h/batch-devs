import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Login: FC<Props> = (props) => {
  return (
    <div>
      This is login page. Don't have an account.{' '}
      <Link to="/signup">
        <span className="text-red-500">Sign up here</span>{' '}
      </Link>
      <Link to="/dashboard">
        <span className="ml-3 text-red-500">go to dashboard</span>{' '}
      </Link>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
