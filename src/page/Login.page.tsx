import { Switch } from '@headlessui/react';
import { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../component/Buttons';
import InputField from '../component/Input.field';
import { FiUser, FiLock } from 'react-icons/fi';

interface Props {}

const Login: FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(false);

  const [data, setData] = useState("");
  

  return (
    <div className="flex flex-col w-1/2 ">
      <div className="w-full px-32 mt-4">
        <div className="text-gray-600">
          <h1 className="text-5xl">
            Log In to <span className="text-blue-500">DEVS</span>
          </h1>
          <p className="mt-5 text-sm font-medium">
            New Here?{' '}
            <Link
              to="/signup"
              className="text-blue-500 border-b border-blue-500"
            >
              Create an account
            </Link>
          </p>
        </div>
        <form className="w-full mt-14">
          <div className="relative">
            <InputField
              labelContent="Email address"
              inputName="email"
              placeholder="Username"
              className="pl-10"
              type="email"
              autoComplete="email"
            />
            <FiUser className="absolute w-6 h-6 text-blue-500 fill-login top-3" />
          </div>
          <div className="relative mt-5">
            <InputField
              labelContent="Password"
              inputName="password"
              placeholder="Password"
              className="pl-10"
              type="password"
              autoComplete="current-password"
            />
            <FiLock className="absolute w-6 h-6 text-blue-500 fill-login top-3" />
          </div>
          <div className="flex justify-between mt-10">
            <Switch.Group>
              <div className="flex items-center">
                <Switch.Label className="mr-4">Show Password</Switch.Label>
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex items-center h-4 rounded-full w-9 transition-colors focus:outline-none`}
                >
                  <span
                    className={`${
                      enabled
                        ? 'translate-x-5  bg-white'
                        : 'translate-x-0 bg-blue-600'
                    } inline-block w-4 h-4 transform rounded-full transition-transform`}
                  />
                </Switch>
              </div>
            </Switch.Group>
            <Button
              theme="blue"
              className="shadow-3xl hover:shadow-none"
              children="Log In"
            />
          </div>
          <div className="flex items-center justify-center mt-10">
            <div>
              <input
                type="checkbox"
                id="loggedIn"
                name="loggedIn"
                className="w-5 h-4"
              />
              <label
                htmlFor="loggedIn"
                className="ml-3 text-lg tracking-wide text-gray-400"
              >
                Keep me logged in
              </label>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/forget-password"
              className="text-lg font-semibold tracking-wider text-blue-500"
            >
              Forget Password?
            </Link>
          </div>
        </form>
        <div className="mt-20">
          <p className="text-sm text-gray-600">
            <span className="text-blue-500">&copy;</span> 2021 All Right
            Reserved. <span className="text-blue-500">DEVS</span> is product of
            DevsLane.{' '}
            <span className="text-blue-500">Cookie Preferences, </span>{' '}
            <span className="text-blue-500">Privacy</span> ,and{' '}
            <span className="text-blue-500">Terms.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);
