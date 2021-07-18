import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <div className="absolute left-1/4 top-13.3 bg-accent w-screen h-screen bg-opacity-15">
      {' '}
      this is dashboard page{' '}
      <Link to="/recordings">
        <span className="text-red-400">go to recordings</span>
      </Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
