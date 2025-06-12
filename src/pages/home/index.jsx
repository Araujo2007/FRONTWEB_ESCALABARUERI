import React from "react"
import styles from '../../styles/home.module.css'
import Logo from "../../assets/icons/barueri.png"
import { IoMdExit } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import lupa from "../../assets/icons/lupa.png"
import dash from "../../assets/Frame 15.png"
import { FaGear } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function home() {

    const navigate = useNavigate()

    const consulta = () => {
        navigate('../consulta')
    }

    const setor = () => {
        navigate('../setor')
    }

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
                    <div className={styles.navbarP}>
                        <IoMdExit className={styles.exit} size={40} color="white"/>
                        <p className={styles.boasVindas}>Bem Vindo(a) Rogério</p>
                    </div>
                    <div className={styles.notification}>
                        <FaBell size={40} color="#F5D100" />
                    </div>
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
            <div className={styles.dashTeste}><img src={dash} alt="" className={styles.dash} /></div>
            <br />
            <div className={styles.setoresEequipes}>
                <div className={styles.setores}>
                    <h2 className={styles.titulo}>Setores</h2>
                    <button type="button" className={styles.setor} onClick={setor}>Administração</button>
                    <button type="button" className={styles.setor} onClick={setor}>Recursos Humanos</button>
                    <button type="button" className={styles.setor} onClick={setor}>Suporte</button>
                    <button type="button" className={styles.setor} onClick={setor}>Atendimento</button>
                    <button type="button" className={styles.setor} onClick={setor}>+</button>
                    <h2 className={styles.titulo}>Equipes</h2>
                    <button type="button" className={styles.setor} onClick={setor}>Alfa</button>
                    <button type="button" className={styles.setor} onClick={setor}>Bravo</button>
                    <button type="button" className={styles.setor} onClick={setor}>Charlie</button>
                    <button type="button" className={styles.setor} onClick={setor}>Delta</button>
                </div>
                <div className={styles.opcoes}>
                    <div className={styles.principaisOpcoes}>
                        <button className={styles.setorConsultar} onClick={consulta}>
                            <div className={styles.informacoesOpcoes}>
                                <FaCalendarAlt size={50} />
                                <p className={styles.textOpcoes}>Consultar Datas</p>
                            </div>
                        </button>
                        <div className={styles.principaisOpcoesR}>
                            <button className={styles.setorNovoFuncionario}>
                                <div className={styles.informacoesOpcoes}>
                                    <FaUserPlus size={40} color="white" />
                                    <p className={styles.textOpcoesB}>Novo Funcionário</p>
                                </div>
                            </button>
                            <button className={styles.setorRelatótios}>
                                <div className={styles.informacoesOpcoes}>
                                    <MdAutoGraph size={40} />
                                    <p className={styles.textOpcoes}>Relatórios</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.maisOpcoes}>
                        <button className={styles.setorNotification}>
                            <div className={styles.informacoesOpcoes}>
                                <FaBell size={40}/>
                                <p className={styles.textOpcoes}>Notificações</p>
                            </div>
                        </button>
                        <button className={styles.setorConfig}>
                            <div className={styles.informacoesOpcoes}>
                                <FaGear size={40} color="white" />
                                <p className={styles.textOpcoes}>Configurações</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home