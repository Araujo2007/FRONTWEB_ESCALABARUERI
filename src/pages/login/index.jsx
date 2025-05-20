import React from "react";
import '../../style/login.css'
import Logo from "../../assets/logo.png"

// import styles from './index.module.css'

function login() {

    return (
        // <div className={styles.div}>
        <div>
            <div className="container">
                <div className="areaLogin">
                    <div className="areaLogo">
                        <div className="elementosLogo">
                            <img src={Logo} alt="" />
                            <h1 className="tituloLogo">Escala</h1>
                            <h1 className="tituloLogo">Barueri</h1>
                        </div>

                    </div>
                    <div className="areaPreenchimento">
                        <h1>Administrador</h1>
                        <br />
                        <h2>Login</h2>
                        <br />
                        <input type="text" placeholder="Número de Matrícula" />
                        <br /><br />
                        <input type="password" placeholder="Senha" />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default login;