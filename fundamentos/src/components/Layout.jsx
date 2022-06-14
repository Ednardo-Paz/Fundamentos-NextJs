import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout(props) {
  return (
    <div className={styles.layout}>
      <div className={styles.cabecalho}>
        {props.titulo ?? 'Mais um exemplo'}
        <Link href="/">Voltar</Link>
      </div>
      <div className={styles.conteudo}>{props.children}</div>
    </div>
  );
}
