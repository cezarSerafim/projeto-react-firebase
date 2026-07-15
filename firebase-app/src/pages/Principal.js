import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function Principal() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsuario(docSnap.data());
        }
      }
    };
    fetchUsuario();
  }, []);

  return (
    <div className="container">
      <h2>Página Principal</h2>
      {usuario ? (
        <>
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Sobrenome:</strong> {usuario.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
        </>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export default Principal;