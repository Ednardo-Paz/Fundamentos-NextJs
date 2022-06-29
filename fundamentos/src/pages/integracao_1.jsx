import { useState } from 'react';
import Layout from '../components/Layout';
export default function integracao() {
  const [cliente, setCliente] = useState({});
  const [codigo, setCodigo] = useState(1);

  function handleClick() {
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then((resp) => resp.json())
      .then((dados) => setCliente(dados));
  }

  return (
    <Layout titulo="Integracão 01">
      <div>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={handleClick}>Obter Cliente</button>
      </div>
      <ul>
        <li>Cógido: {cliente.id}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  );
}
