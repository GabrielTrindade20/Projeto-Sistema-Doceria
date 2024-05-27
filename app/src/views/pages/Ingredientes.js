import Styles from '../css/page.module.css'
import styleTable from '../css/table.module.css'
import IconButton from '../components/ButtomCadastro'



function Home() {

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
                            <th>Descrição</th>
                            <th>Quantidade em Estoque</th>
                            <th>Unidade de Medida</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Exemplo de linha, você pode usar um loop para renderizar os dados do banco de dados aqui */}
                        <tr>
                            <td>Farinha</td>
                            <td>Farinha de trigo</td>
                            <td>50</td>
                            <td>kg</td>
                            <td>
                                <button className={styleTable.editButton}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className={styleTable.deleteButton}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Açúcar</td>
                            <td>Açúcar refinado</td>
                            <td>30</td>
                            <td>kg</td>
                            <td>
                                <button className={styleTable.editButton}>
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button className={styleTable.deleteButton}>
                                    <i className="fas fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>



    )
}



export default Home