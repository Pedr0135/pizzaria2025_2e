import'.produtos.css'

const CadastroProduto = () => {
    return (
        <>
        
            <h3>Cadastro de Produtos</h3>

            <input type="text" id="id"/>
            <input type="text" id="nome"/>
            <input type="text" id="descrição"/>
            <input type="text" id="preco"/>
            <input type="text" id="tipo"/>
            <input type="text" id="categoriaId"/>
            
            <input type="button" id="cadastrar" 
                    onClick={()=>{alert('vamos cadastrar produto')}} />
        </>
    )
}

export default CadastroProduto