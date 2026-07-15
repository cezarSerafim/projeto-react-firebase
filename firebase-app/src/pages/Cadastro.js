import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "usuarios", uid), {
        uid,
        nome,
        sobrenome,
        dataNascimento,
        email
      });

      setMensagem("Cadastro realizado com sucesso!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMensagem("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <input placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} />
      <input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <input placeholder="Data de Nascimento" type="date" onChange={(e) => setDataNascimento(e.target.value)} />
      <button onClick={handleCadastro}>Cadastrar</button>
      <label>{mensagem}</label>
    </div>
  );
}

export default Cadastro;