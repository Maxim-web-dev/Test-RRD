import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./signUp.module.css";

export function SignUp() {
  const [stateOfPassword, setStateOfPassword] = useState("password");
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    if (!form.email.value || !form.password.value || !form.name.value) {
      alert('Введите данные')
    } else if (form.password.value !== form.confirmPassword.value) {
      alert("Пароли не совпадают");
    } else {
      const name = form.name.value
      const email = form.email.value
      const password = form.password.value

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

      navigate(-1) 
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
      <div className={styles.signUpContainer}>
        <img
          src="https://images.unsplash.com/photo-1628780188245-8c0f3ba27a89?auto=format&fit=crop&q=80&w=3110&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={styles.imgSignUp}
        />

        <div className={styles.textBlockSignUp}>
          <h2 className={styles.h2}>Зарегистрируйтесь</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Имя"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
            />

            <input
              name="password"
              type={stateOfPassword}
              placeholder="Пароль"
            />

            <input
              name="confirmPassword"
              type={stateOfPassword}
              placeholder="Подтвердите пароль"
            />
            <div className="checkboxContainer">
              <input
                type="checkbox"
                className={styles.showPassword}
                id="showPassword"
                onClick={viewPassword}
              />
              <label htmlFor="showPassword">Показать пароль</label>
            </div>
            <button type="submit" className={styles.signUp}>
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}