import React, { useEffect } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./env";
import { useNavigate } from 'react-router-dom'
//compartilhar o alor entre os componentes sem precisar passar as propriedades
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const logout = React.useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token')
    navigate('/login')
}, [navigate]);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

 useEffect(() => {
    async function AuthLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (err) {
            logout()
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false)
      }
    }
    AuthLogin();
  }, [logout]);

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuário inválido`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate('/user')
    } catch(err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider 
      value={{ userLogin, data, logout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  );
};
