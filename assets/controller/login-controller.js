import { clienteService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const email = evento.target.querySelector('[data-email]').value
    const senha = evento.target.querySelector('[data-senha]').value

    await clienteService.login(email, senha)
    window.location.href = 'home.html'
  }
  catch (erro) {
    console.log(erro)
    window.location.href = "erro.html"
  }
})