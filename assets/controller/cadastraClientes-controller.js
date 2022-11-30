import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    const cpf = evento.target.querySelector('[data-cpf]').value
    const telefone = evento.target.querySelector('[data-telefone]').value
    const senha = evento.target.querySelector('[data-senha]').value

    await clienteService.criaCliente(nome, email, cpf, telefone, senha)
    window.location.href = 'edicao_concluida.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "erro.html"
  }
})