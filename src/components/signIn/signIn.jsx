import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import styles from "./signIn.module.css";

export function SignIn({ setUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [stateOfPassword, setStateOfPassword] = useState("password");

  const fromPage = location.state?.from?.pathname || "/";
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    const form = event.target;
    if (email !== form.email.value) {
      alert("Wrong email!");
    } else if (password !== form.password.value) {
      alert("Wrong password!");
    } else {
      setUser(true);
      navigate(fromPage, { replace: true });
    }
  };
  const viewPassword = () => {
    if (stateOfPassword === "password") {
      setStateOfPassword("text");
    } else if (stateOfPassword === "text") {
      setStateOfPassword("password");
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.signInСontainer}>
        <div className={styles.textBlockSignIn}>
          <h2 className={styles.h2}>Войдите в аккаунт</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
            />
            <div>
              <input
                name="password"
                type={stateOfPassword}
                placeholder="Пароль"
              />
              <div>
                <label><input
                  type="checkbox"
                  className={styles.showPassword}
                  onClick={viewPassword}
                /> Показать пароль</label>
                
              </div>
            </div>
            <button type="submit" className={styles.signIn}>
              Войти в аккаунт
            </button>
          </form>
          <Link to="/account/signup" className={styles.notAccount}>
            У вас нет аккаунта?
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1628418064700-f65f874f0fb8?auto=format&fit=crop&q=80&w=3110&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={styles.imgSignIn}
        />
      </div>
    </div>
  );
}
