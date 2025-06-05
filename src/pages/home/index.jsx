import React from "react"
import styles from '../../styles/home.module.css'
import Logo from "../../assets/icons/barueri.png"
import exit from "../../assets/icons/exit.png"
import notification from "../../assets/icons/notification.png"
import lupa from "../../assets/icons/lupa.png"
import dash from "../../assets/Frame 15.png"
import config from "../../assets/icons/settings.png"
import calendar from "../../assets/icons/calendar.png"
import user from "../../assets/icons/user.png"
import relatorio from "../../assets/icons/relatorio.png"

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
            <div className={styles.dashTeste}><img src={dash} alt="" className={styles.dash} /></div>
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
                    <button type="button" className={styles.setor}>Alfa</button>
                    <button type="button" className={styles.setor}>Bravo</button>
                    <button type="button" className={styles.setor}>Charlie</button>
                    <button type="button" className={styles.setor}>Delta</button>
                </div>
                <div className={styles.opcoes}>
                    <div className={styles.principaisOpcoes}>
                        <button className={styles.setorConsultar}>
                        <div className={styles.informacoesOpcoes}>
                            <img src={calendar} alt="" className={styles.iconOpcoes}/>
                            <p className={styles.textOpcoes}>Consultar Datas</p>
                            </div>
                            </button>
                        <div className={styles.principaisOpcoesR}>
                        <button className={styles.setorNovoFuncionario}>
                         <div className={styles.informacoesOpcoes}>
                         <img src={user} alt="" className={styles.iconOpcoes}/>
                         <p className={styles.textOpcoes}>Novo Funcionário</p>
                         </div>
                        </button>
                        <button className={styles.setorRelatótios}>
                            <div className={styles.informacoesOpcoes}>
                            <img src={relatorio} alt="" className={styles.iconOpcoes}/>
                            <p className={styles.textOpcoes}>Relatórios</p>
                            </div>
                            </button>
                        </div>
                    </div>
                    <button className={styles.setorNotification}>
                    <div className={styles.informacoesOpcoes}>
                            <img src={notification} alt="" className={styles.iconOpcoes}/>
                            <p className={styles.textOpcoes}>Notificações</p>
                            </div></button>
                    <button className={styles.setorConfig}>
                    <div className={styles.informacoesOpcoes}>
                            <img src={config} alt="" className={styles.iconOpcoes}/>
                            <p className={styles.textOpcoes}>Configurações</p>
                            </div></button>
                </div>
            </div>
        </div>
    )
}

export default home