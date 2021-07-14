import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Recordings: FC<Props> = (props) => {
  return (<div> this is recordings page <Link to="/dashboard"><span className="text-red-400">go to dashboard</span></Link></div>);
};

Recordings.defaultProps = {};

export default memo(Recordings);
