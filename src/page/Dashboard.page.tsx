import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Dashboard: FC<Props> = (props) => {
  return (
    <div>
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
