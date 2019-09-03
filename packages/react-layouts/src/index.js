import 'core-js'; // TODO: Potentially remove polyfills from package, after triaging potential breaking changes
import 'regenerator-runtime/runtime';

import Confirmation from 'auth/Confirmation';
import ForgotPassword from 'auth/ForgotPassword';
import ForgotPasswordSent from 'auth/ForgotPasswordSent';
import Login from 'auth/Login';
import ResetPassword from 'auth/ResetPassword';
import ResetPasswordSuccess from 'auth/ResetPasswordSuccess';

export {
  Confirmation,
  ForgotPassword,
  ForgotPasswordSent,
  Login,
  ResetPassword,
  ResetPasswordSuccess,
};
