import React from 'react';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form action
      ="#" method="post">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div>
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
        </div>

        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;