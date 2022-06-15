import Link from 'next/link';
import styles from '../styles/Navegador.module.css';
export default function Navegador({ cor, destino, texto }) {
  return (
    <Link href={destino}>
      <div
        className={styles.navegador}
        style={{
          backgroundColor: cor ?? 'dodgerblue',
        }}
      >
        {texto}
      </div>
    </Link>
  );
}
