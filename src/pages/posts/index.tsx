import Head from 'next/head';
import { Fragment } from 'react';
import styles from '../../styles/pages/posts/posts.module.scss';

export default function Posts() {
  return (
    <Fragment>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.postList}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Como renomear vários arquivos de uma vez usando o terminal
            </strong>
            <p>
              Como renomear a extensão do arquivo de .js para .ts ou arquivos
              React de .jsx para .tsx de maneira fácil e rápida? Fazer isso
              manualmente é inviável! E, para nós Devs, isso pode ser
              automatizado.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Como renomear vários arquivos de uma vez usando o terminal
            </strong>
            <p>
              Como renomear a extensão do arquivo de .js para .ts ou arquivos
              React de .jsx para .tsx de maneira fácil e rápida? Fazer isso
              manualmente é inviável! E, para nós Devs, isso pode ser
              automatizado.
            </p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>
              Como renomear vários arquivos de uma vez usando o terminal
            </strong>
            <p>
              Como renomear a extensão do arquivo de .js para .ts ou arquivos
              React de .jsx para .tsx de maneira fácil e rápida? Fazer isso
              manualmente é inviável! E, para nós Devs, isso pode ser
              automatizado.
            </p>
          </a>
        </div>
      </main>
    </Fragment>
  );
}
