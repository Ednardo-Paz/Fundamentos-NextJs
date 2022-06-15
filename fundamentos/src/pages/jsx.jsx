import Layout from '../components/Layout';

export default function Jsx() {
  const titulo = <h1>JSX é o conceito Central</h1>;

  function subtitulo() {
    return <h2>{'muito legal'.toUpperCase()}</h2>;
  }

  return (
    <Layout titulo={'Entendendo o JSX'}>
      {titulo}
      {subtitulo()}
      <p>{JSON.stringify({ nome: 'Ednardo', idade: 38 })}</p>
    </Layout>
  );
}
