import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    // <div className="absolute w-full h-screen bg-accent bg-opacity-15  top-26.6">
      // {' '}
      <div className="absolute md:left-58 ">
        this is dashboard page{' '}
        <Link to="/recordings">
          <span className="text-red-400">go to recordings</span>
        </Link>
      </div>
    // </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
