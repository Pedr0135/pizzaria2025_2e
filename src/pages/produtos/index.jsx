//ferramenta de consumo de rotas "axios"
import axios from 'axios'
// hooks do react para controlar renderização de estados
import { useEffect, useState } from 'react';

const Produtos = () => {
    //Estado para guardar listas de pizzas
    const [pizzas,setPizzas] = useState(['Calabreza','Muçarela','Baiana']);
    //consumir as pizzas das rotas do bancked
    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(response => setPizzas(response.data.data))
    .catch(error =>console.log(error))

    // Mapeamento das pizzas da lista (iteração)
    const listaPizzas = pizzas.map(pizza => <li key={pizza.id}>{pizza.nome}</li>);
    return(
    <>
        <h3>Listagem de Produtos</h3>
        <ul>
            {listaPizzas}
        </ul>
    </> 
    )
}
export default Produtos