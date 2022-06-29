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
        destino={'/estatico'}
        texto={'Conteúdo Estático'}
        cor={' #03396c'}
      />
      <Navegador
        destino={'/integracao_1'}
        texto={'Integracao com API 01'}
        cor={'#fe4a49'}
      />
      <Navegador
        destino={'/cliente/sp-2/321'}
        texto={'Navegação 02'}
        cor={'blue'}
      />
      <Navegador
        destino={'/estado'}
        texto={'Componente com Estado'}
        cor={'pink'}
      />
    </div>
  );
}
