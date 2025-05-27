import React from "react"
import styles from '../../styles/setor.module.css'
import { useForm } from "react-hook-form"

function setor() {
    return (
        <div className={styles.container}>
            <div className={styles.areaSetor}>
                <h1>Cadastro de Setor</h1>
                <form>
                    <label htmlFor="setor">Setor</label>
                    <input type="text" id="setor" name="setor" placeholder="Digite o nome do setor" />
                    
                    <label htmlFor="descricao">Descrição</label>
                    <textarea id="descricao" name="descricao" placeholder="Digite a descrição do setor"></textarea>
                    
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default setor;