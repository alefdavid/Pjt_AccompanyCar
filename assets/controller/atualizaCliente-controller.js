import { clienteService } from '../service/cliente-service.js'


(async () => { 
  const pegaURL = new URL(window.location)

  const id = pegaURL.searchParams.get('id')
  
  const inputNome = document.querySelector('[data-nome]')
  const inputEmail = document.querySelector('[data-email]')
  const inputcpf = document.querySelector('[data-cpf]')
  const inputtelefone = document.querySelector('[data-telefone]')
  try { 
    const dados = await clienteService.detalhaCliente(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
    inputcpf.value = dados.cpf
    inputtelefone.value = dados.telefone
  }
  catch(erro){
    console.log(erro)
    window.location.href="/erro.html"
  }

  const formulario = document.querySelector('[data-form]')
  
  formulario.addEventListener('submit', async (evento)=> { 
    evento.preventDefault()
    try {
      await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value, inputcpf.value, inputtelefone.value)
      window.location.href = "./editarCliente_concluida.html"
    }
    catch(erro){
      console.log(erro)
      window.location.href="./erro.html"
    }
  })
})()
