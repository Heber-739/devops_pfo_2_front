import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);


  useEffect(() => {
  fetch("http://localhost:3000/usuarios") // ya no necesitas poner localhost:3000
    .then((res) => res.json())
    .then((data) => {
        console.log({data});
        setUsuarios(data);
      });
}, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>👤 Lista de Usuarios</h1>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
