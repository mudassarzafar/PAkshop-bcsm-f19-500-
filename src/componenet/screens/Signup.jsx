import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div className="signup-main">
        Pak Shop
        <div className="signup-div">
          <h3 id="Registertobricklink">Register to Pak Shop</h3>
          <form id="form">
            <input
              type="fname"
              placeholder="First Name"
              name="fname"
              id="fname"
            ></input>
            <input
              type="lname"
              placeholder="Last Name"
              name="lname"
              id="lname"
            ></input>
            <input
              type="text"
              placeholder="Mobile no or Email"
              name="email"
              id="email"
              autoComplete="off"
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>

            <button id="loginbtn">Sign up</button>
            <a id="cna">
              <Link to="/login">Already have a account ??</Link>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
