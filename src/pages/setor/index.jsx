import React, { useState } from 'react';
import styles from '../../styles/setor.module.css';
 
function Setor() {
  const [menuAberto, setMenuAberto] = useState(false);
 
  return (
    <div className={styles.body}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <button className={styles.menuButton} onClick={() => setMenuAberto(true)}>☰ Menu</button>
        <h1 className={styles.logo}>Minha App</h1>
      </nav>
 
      {/* Offcanvas (menu lateral) */}
      <div className={`${styles.offcanvas} ${menuAberto ? styles.ativo : ''}`}>
        <button className={styles.fechar} onClick={() => setMenuAberto(false)}>×</button>
        <ul className={styles.menuList}>
          <li><a href="/">Início</a></li>
          <li><a href="/setor">Setor</a></li>
          <li><a href="/funcionario">Funcionários</a></li>
        </ul>
      </div>
 
      {/* Conteúdo principal */}
      <div className={styles.container}>
        <div className={styles.areaSetor}>
          <h1>Cadastro de Setor</h1>
          <form>
            <label htmlFor="setor">Setor</label>
            <input type="text" id="setor" name="setor" placeholder="Digite o nome do setor" />
            <label htmlFor="descricao">Descrição</label>
            <textarea id="descricao" name="descricao" placeholder="Digite a descrição" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Setor;
