import React, { useState } from 'react';
import formStyles from '../../../css/cadastro.module.css';
import Styles from '../../../css/page.module.css';

const IngredientForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar dados ao banco de dados
        console.log({ name, description, quantity, unit });
    };

    const handleReset = () => {
        setName('');
        setDescription('');
        setQuantity('');
        setUnit('');
    };

    return (
        <div className={Styles.page}>

            <div className={Styles.pageTitulo}>
                <h1>Cadastrar Ingrediente</h1>
            </div>

            <form className={formStyles.form} onSubmit={handleSubmit}>
                <label className={formStyles.label} htmlFor="name">Nome do Ingrediente</label>
                <input
                    id="name"
                    type="text"
                    className={formStyles.input}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label className={formStyles.label} htmlFor="description">Descrição</label>
                <textarea
                    id="description"
                    className={formStyles.textArea}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <label className={formStyles.label} htmlFor="quantity">Quantidade em Estoque</label>
                <input
                    id="quantity"
                    type="number"
                    className={formStyles.input}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <label className={formStyles.label} htmlFor="unit">Unidade de Medida</label>
                <select
                    id="unit"
                    className={formStyles.select}
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    required
                >
                    <option value="">Selecione</option>
                    <option value="kg">Kg</option>
                    <option value="g">g</option>
                    <option value="l">L</option>
                    <option value="ml">ml</option>
                </select>
                <div>
                    <button type="submit" className={`${formStyles.button} ${formStyles.buttonSubmit}`}>Cadastrar</button>
                    <button type="button" className={`${formStyles.button} ${formStyles.buttonReset}`} onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
};

export default IngredientForm;
