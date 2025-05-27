import React from "react";
import styles from '../../styles/login.module.css'
import Logo from "../../assets/logo.png"
import { useForm } from "react-hook-form"

// import styles from './index.module.css'

function login() {
    const onSubmit = () => {

    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    return (

        // <div className={styles.div}>
        <div className={styles.body}>
        <div className={styles.container}>
            <div className={styles.areaLogin}>
                <div className={styles.areaLogo}>
                    <div className={styles.elementosLogo}>
                        <img src={Logo} alt="" />
                        <h1 className={styles.tituloLogo}>Escala</h1>
                        <h1 className={styles.tituloLogo}>Barueri</h1>
                    </div>

                </div>
                <div className={styles.areaPreenchimento}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className={styles.textAdm}>Administrador</h1>
                        <h2 className={styles.h2}>Login</h2>
                        <br />
                        <input className={styles.input} type="text" placeholder=" Número de Matrícula" {...register("matricula", {
                            required: true,
                            pattern: /^[0-9]+$/i
                        })} />
                        <br /><br />
                        <input className={styles.input} type="password" placeholder=" Senha" {...register("password")} />
                        <br /><br />
                        <input className={styles.button} type="submit" value="ENTRAR" />
                        <br /><br />
                        <a className={styles.a} href="">ESQUECI MINHA SENHA</a>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )

}

export default login;