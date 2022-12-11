import { Link } from "react-router-dom";
import "../style/Login.css";
const Login = () => {
  return (
    <>
      <div className="login-main">
        Pak Shop
        <div className="login-div">
          <h3 id="logintobricklink">Login to Pak Shop</h3>
          <form id="form">
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
            <button id="loginbtn">Login</button>
            <a id="cna">
              <Link to="/signup">create new account</Link>
            </a>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
