import { truncate, formatDate } from './utils.js'

export const mostrarUsuario = (user) => {
  console.log(`Usuario: ${user.login}`)
  console.log(`Nombre: ${user.name}`)
  console.log(`Bio: ${truncate(user.bio, 50)}`)
  console.log(`Repos públicos: ${user.public_repos}`)
}

export const mostrarRepos = (repos) => {
  repos.slice(0, 5).forEach(repo => {
    console.log(`- ${repo.name} | ${formatDate(repo.created_at)}`)
  })
}