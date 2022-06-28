import Navegador from '../components/Navegador';
export default function Inicio() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Navegador destino={'/estiloso'} texto={'Estiloso'} />
      <Navegador destino={'/exemplo'} texto={'Exemplo'} />
      <Navegador destino={'/jsx'} texto={'Jsx'} cor={'crimson'} />
      <Navegador destino={'/navegacao'} texto={'Navegação 01'} cor={'green'} />
      <Navegador
        destino={'/cliente/sp-2/321'}
        texto={'Navegação 02'}
        cor={'blue'}
      />
    </div>
  );
}
