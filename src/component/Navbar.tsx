import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';

interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <div className="w-screen px-12 py-2 bg-gray-100 h-13.3 fixed top-13.3 z-10">
      <div className="flex justify-between">
        <div>
          <FiMenu className="w-6 h-6 mt-2 cursor-pointer text-dropdown" />
        </div>
        <div className="relative mt-1">
          <Link
            to="/settings"
            className="py-1 pl-4 text-sm bg-white border border-gray-300 rounded-md pr-9 text-setting "
          >
            <span className="">Settings</span>
            <BiChevronDown className="absolute right-2 top-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
