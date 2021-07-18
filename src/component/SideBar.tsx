import { FC, memo } from 'react';

interface Props {}

const SideBar: FC<Props> = (props) => {
  return (
    <div className="absolute w-1/4 h-screen text-white bg-gray-400 top-13.3">
      {' '}
      Sidebar
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
