import { Switch } from '@headlessui/react';
import { FC, memo, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../component/Buttons';
import InputField from '../component/Input.field';
import { FiUser, FiLock } from 'react-icons/fi';
import { FaSpinner } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import * as yup from 'yup';
import { useFormik } from 'formik';

interface Props {}
const Signup: FC<Props> = (props) => {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();

  const { handleSubmit, getFieldProps, touched, values, errors, isSubmitting } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        password: '',
      },
      validationSchema: yup.object().shape({
        email: yup.string().required().email(),
        password: yup
          .string()
          .required()
          .min(8, ({ min }) => `Atleast ${min} chars required`),
        username: yup.string().required(),
      }),
      onSubmit: (data, { setSubmitting }) => {
        console.log('submitting data', data);
        setTimeout(() => {
          console.log('submitted data successfully');
          history.push('/login');
        }, 4000);
      },
    });

  return (
    <div className="flex flex-col w-screen h-screen lg:w-1/2">
      <div className="w-full px-5 mt-4 sm:px-28">
        <div className="text-gray-600">
          <h1 className="text-5xl">Get started with a free account</h1>
          <p className="mt-5 text-sm font-medium">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-500 border-b border-blue-500"
            >
              Log in
            </Link>
          </p>
        </div>
        <form className="w-full mt-8" onSubmit={handleSubmit}>
          <div className="relative">
            <InputField
              labelContent="Username"
              inputName="username"
              placeholder="Username"
              className="pl-10"
              type="username"
              autoComplete="username"
              {...getFieldProps('username')}
            />
            <FiUser className="absolute w-6 h-6 text-blue-500 fill-login top-3" />
          </div>
          {touched.username && (
            <div className="text-red-400">{errors.username}</div>
          )}
          <div className="relative mt-3">
            <InputField
              labelContent="Email address"
              inputName="email"
              placeholder="Email Address"
              className="pl-10"
              type="email"
              autoComplete="email"
              {...getFieldProps('email')}
            />
            <HiOutlineMail className="absolute w-6 h-6 text-blue-500 fill-login top-3" />
          </div>
          {touched.email && <div className="text-red-400">{errors.email}</div>}
          <div className="relative mt-3">
            <InputField
              labelContent="Password"
              inputName="password"
              placeholder="Password"
              className="pl-10"
              type={enabled && values.password ? 'text' : 'password'}
              autoComplete="current-password"
              {...getFieldProps('password')}
            />
            <FiLock className="absolute w-6 h-6 text-blue-500 fill-login top-3" />
          </div>
          {touched.password && (
            <div className="text-red-400">{errors.password};</div>
          )}
          <div className="flex mt-10">
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
                I agree to the{' '}
                <span className="text-blue-500">terms and conditions.</span>
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-8">
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
              type="submit"
              theme="blue"
              className="shadow-3xl hover:shadow-none"
              children={
                isSubmitting ? (
                  <FaSpinner className="w-4 h-4 animate-spin"></FaSpinner>
                ) : (
                  'Get Started!'
                )
              }
            />
          </div>
        </form>

        <p className="mt-12 text-sm text-gray-600">
          <span className="text-blue-500">&copy;</span> 2021 All Right Reserved.{' '}
          <span className="text-blue-500">DEVS</span> is product of Devs.{' '}
          <span className="text-blue-500">Cookie Preferences, </span>{' '}
          <span className="text-blue-500">Privacy</span> ,and{' '}
          <span className="text-blue-500">Terms.</span>
        </p>
      </div>
    </div>
  );
};

Signup.defaultProps = {};
export default memo(Signup);
