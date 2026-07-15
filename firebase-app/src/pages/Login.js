import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate("/principal");
    } catch (error) {
      setMensagem("Usuário não cadastrado ou senha incorreta!");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Acessar</button>
      <label>{mensagem}</label>
    </div>
  );
}

export default Login;