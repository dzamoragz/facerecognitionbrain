import { useState } from "react";
const Signin = ({loadUser,onRouteChange}) => {
  
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const onSubmitSignIn = () => {
    const base = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/$/, '') : '';
    fetch(`${base}/signin`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signInEmail,
          password: signInPassword,
        }),
    })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            loadUser(user);
            onRouteChange("home");
          }
        })
        .catch(console.log);
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80 center">
        <div className="measure ">
          <fieldset
            id="sign_up"
            className="ba b--transparent ph0 mh0"
          >
            <legend className="f1 fw6 ph0 mh0 center">
              Sign In
            </legend>

            <div className="mt3">
              <label
                className="db fw6 lh-copy f4 tc bold mt3 "
                htmlFor="email-address"
              >
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                onChange={(e) => setSignInEmail(e.target.value)}
                name="email-address"
                id="email-address"
              />
            </div>

            <div className="mv3">
              <label
                className="db fw6 lh-copy f4 tc bold mt3"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                onChange={(e) => setSignInPassword(e.target.value)}
                name="password"
                id="password"
              />
            </div>
          </fieldset>

          <div className="tc">
            <input
              onClick={onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
            />
          </div>

          <div className="lh-copy mt3">
            <p
              onClick={() => onRouteChange('register')}
              className="f6 link dim black db tc pointer"
            >
              Register
            </p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signin;