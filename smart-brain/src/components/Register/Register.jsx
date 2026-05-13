import { useState } from "react";


const Register = ({loadUser, onRouteChange }) => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  
    const onSubmitRegister = () => {
      fetch("http://localhost:3000/register", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: Email,
            password: Password,
            name: Name
          }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user) {
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
              Register
            </legend>

            <div className="mt3">
              <label
                className="db fw6 lh-copy f4 tc bold mt3 "
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

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
                name="email-address"
                id="email-address"
                onChange={(e) => setEmail(e.target.value)}
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
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </fieldset>

          <div className="tc">
            <input
              onClick={onSubmitRegister}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Register;