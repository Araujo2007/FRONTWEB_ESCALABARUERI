import React from "react";
import '../../style/login.css'
import Logo from "../../assets/logo.png"
import { useRef } from "react";

// import styles from './index.module.css'

function login() {

    const matricula = useRef()
    const password = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        try {
            matricula.current.value,
            password.current.value
        } catch (error) {
            
        }
    }

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
                        <form action="">
                            <h1 className="textAdm">Administrador</h1>
                            <h2>Login</h2>
                            <br />
                            <input type="text" placeholder=" Número de Matrícula" ref={matricula} />
                            <br /><br />
                            <input type="password" placeholder=" Senha" ref={password} />
                            <br /><br />
                            <input className="button" type="button" value="ENTRAR" />
                            <br /><br />
                            <a href="">ESQUECI MINHA SENHA</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default login;