import React from "react";
import '../../style/login.css'
// import styles from './index.module.css'

function login(){

    return(
        // <div className={styles.div}>
        <div>
            <div className="container">
            <div className="areaLogin">
                <div className="areaLogo">
                    <img src="" alt="" />
                    <h1>Escala Barueri</h1>
                </div>
                <div className="areaPreenchimento">
                    <h1>Administrador</h1>
                    <br />
                    <h2>Login</h2>
                    <br />
                    <input type="number" placeholder="Número de Matrícula" />
                </div>
            </div>
        </div>
        </div>
    )

}

export default login;