import React from "react"
import styles from '../../styles/home.module.css'
import Logo from "../../assets/icons/barueri.png"
import exit from "../../assets/icons/exit.png"
import notification from "../../assets/icons/notification.png"
import lupa from "../../assets/icons/lupa.png"
import dash from "../../assets/Frame 15.png"

function home() {
    return (
        <div className={styles.container}>
            <div className={styles.fixed}>
            <div className={styles.secretariaElogo}>
                <div className={styles.textSecretaria}>
                    <h2 className={styles.h2Logo}>Secretaria de </h2>
                    <h1 className={styles.h1Logo}>Mobilidade Urbana</h1>
                </div>
                <div className={styles.logo}>
                    <img className={styles.imgLogo} src={Logo} alt="" />
                </div>
            </div>
            <nav className={styles.navbar}>
                <img src={exit} alt="" className={styles.exit} />
                <p className={styles.boasVindas}>Bem Vindo(a) Rogério</p>
                <img src={notification} alt="" className={styles.notification} />
            </nav>
            </div>
            <br />
            <div className={styles.barraPesquisa}>
                <input type="text" className={styles.inputPesquisa} placeholder='  Pesquisar... ' />
                <div className={styles.lupa}>
                    <img className={styles.imgLupa} src={lupa} alt="" />
                </div>
            </div>
            <br />
            <div className={styles.dashTeste}><img src={dash} alt="" className={styles.dash}/></div>
            <br />
            <div className={styles.setoresEequipes}>
                <div className={styles.setores}>
                    <h2 className={styles.titulo}>Setores</h2>
                    <button type="button" className={styles.setor}>Administração</button> 
                    <button type="button" className={styles.setor}>Recursos Humanos</button> 
                    <button type="button" className={styles.setor}>Suporte</button> 
                    <button type="button" className={styles.setor}>Atendimento</button> 
                    <button type="button" className={styles.setor}>+</button> 
                    <h2 className={styles.titulo}>Equipes</h2>
                    <button type="button"  className={styles.setor}>Alfa</button> 
                    <button type="button" className={styles.setor}>Bravo</button> 
                    <button type="button" className={styles.setor}>Charlie</button> 
                    <button type="button" className={styles.setor}>Delta</button> 
                </div>
                <div className={styles.opcoes}>
                    <button className={styles.setor}>Consultar Datas</button>
                    
                </div>
            </div>
        </div>
    )
}

export default home