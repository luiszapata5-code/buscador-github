import { buscarUsuario, buscarRepos } from './api.js'
import { mostrarUsuario, mostrarRepos } from './ui.js'

const username = 'luiszapata5-code'

const main = async () => {
  const user = await buscarUsuario(username)
  mostrarUsuario(user)
  
  const repos = await buscarRepos(username)
  mostrarRepos(repos)
}

main()