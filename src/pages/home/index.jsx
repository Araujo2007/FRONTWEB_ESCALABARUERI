import React from "react"
import styles from '../../styles/home.module.css'
import Logo from "../../assets/icons/barueri.png"
import exit from "../../assets/icons/exit.png"
import notification from "../../assets/icons/notification.png"
import lupa from "../../assets/icons/lupa.png"

function home() {
    return (
        <div className={styles.container}>
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
            <br />
            <div className={styles.barraPesquisa}>
                <input type="text" className={styles.inputPesquisa} placeholder='  Pesquisar... ' />
                <div className={styles.lupa}>
                    <img className={styles.imgLupa} src={lupa} alt="" />
                    </div>
            </div>        
        </div>
    )
}

export default home