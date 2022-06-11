export default function Jsx() {
  const titulo = <h1>JSX é o conceito Central</h1>;

  function subtitulo() {
    return <h2>{'muito legal'.toUpperCase()}</h2>;
  }

  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>{JSON.stringify({ nome: 'Ednardo', idade: 38 })}</p>
    </div>
  );
}
