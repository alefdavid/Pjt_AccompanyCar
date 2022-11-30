const listaClientes = () =>  {
    return fetch(`http://localhost:41358/api/buscar/pessoa/`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
    })
}

const login = (email,senha) =>  {
    return fetch(`http://localhost:41358/api/consultar/login/${email},${senha}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Email ou Senha inválido!')
    })
}

const criaCliente = (nome, email, cpf, telefone, senha) => { 
    return fetch(`http://localhost:41358/api/cadastrar/pessoa`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone,
            senha: senha
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => { 
    return fetch(`http://localhost:41358/api/deletar/pessoa/${id}`, {
        method: 'DELETE'
    })
    .then( resposta => { 
        if(!resposta.ok){
        throw new Error('Não foi possível deletar um cliente')
        }
    })
}
 
const detalhaCliente = (id) => { 
    return fetch(`http://localhost:41358/api/buscar/pessoa/${id}`)
    .then(resposta => { 
        if(resposta.ok){
            return resposta.json()
        }
    
        throw new Error('Não foi possível detalhar um cliente')
    })
}

const atualizaCliente = (id, nome, email, cpf, telefone) => {
    return fetch(`http://localhost:41358/api/editar/pessoa/${id}`, {
        method: 'PUT',
        headers: { 
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome, 
            email: email,
            cpf: cpf, 
            telefone: telefone
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar um cliente')
    })
}

export const clienteService = { 
    listaClientes,
    criaCliente, 
    removeCliente,
    detalhaCliente,
    atualizaCliente,
    login
}