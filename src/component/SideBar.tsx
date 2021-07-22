import { FC, memo } from 'react';

interface Props {}

const SideBar: FC<Props> = (props) => {
  return (
    <div className="absolute w-60 h-screen text-white bg-gray-400 top-26.6 overflow-y-hidden">
      {' '}
      Sidebar
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
