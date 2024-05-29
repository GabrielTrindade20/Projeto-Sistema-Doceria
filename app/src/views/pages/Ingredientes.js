import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styles from '../css/page.module.css'
import styleTable from '../css/table.module.css'
import IconButton from '../components/ButtomCadastro'


function Ingredientes() {
    const [ingredientes, setIngredientes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIngredientes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/ingredientes/buscarTodosIngredientes');
                setIngredientes(response.data);
            } catch (error) {
                setError('Erro ao buscar ingredientes');
            } finally {
                setLoading(false);
            }
        };

        fetchIngredientes();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={Styles.page}>
            <div className={Styles.pageTitulo}>
                <h1>Ingredientes Cadastrados</h1>
            </div>

            <div className={Styles.cadastro}>
                <h3>Quantidade De Receitas Cadastradas</h3>
                <IconButton to="/cadastrarIngredientes" iconClass="fas fa-plus" /> {/* Botão com ícone */}
            </div>

            <div className={styleTable.tableContainer}>
                <table className={styleTable.ingredientTable}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Quantidade em Estoque</th>
                            <th>Unidade de Medida</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ingredientes.map((ingrediente) => (
                            <tr key={ingrediente.idIngredientes}>
                                <td>{ingrediente.nome}</td>
                                <td>{ingrediente.quantidade}</td>
                                <td>{ingrediente.unidade}</td>
                                <td>{ingrediente.preco}</td>
                                <td>{ingrediente.descricao}</td>
                                <td>
                                    <button className={styleTable.editButton}>
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button className={styleTable.deleteButton}>
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Ingredientes