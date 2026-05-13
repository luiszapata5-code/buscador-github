import { buscarUsuario, buscarRepos } from './api.js'
import { truncate, formatDate } from './utils.js'

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const resultado = document.getElementById('resultado')
const reposDiv = document.getElementById('repos')

const buscar = async () => {
const username = input.value.trim()
if (!username) return

resultado.innerHTML = '<p class="loading">Buscando...</p>'
reposDiv.innerHTML = ''

try {
const [user, repos] = await Promise.all([
buscarUsuario(username),
buscarRepos(username)
])

resultado.innerHTML = `
<div class="card">
<img class="avatar" src="${user.avatar_url}">
<div>
<h2>${user.name || user.login}</h2>
<p>${truncate(user.bio, 80) || 'Sin bio'}</p>
<p>📦 ${user.public_repos} repos</p>
</div>
</div>`

reposDiv.innerHTML = repos.slice(0,6).map(r => `
<div class="repo">
<a href="${r.html_url}" target="_blank">${r.name}</a>
<p>${truncate(r.description, 60) || 'Sin descripción'}</p>
<small>${formatDate(r.created_at)}</small>
</div>`).join('')

} catch (err) {
resultado.innerHTML = `<p class="error">${err.message}</p>`
}
}

btn.addEventListener('click', buscar)
input.addEventListener('keydown', e => e.key === 'Enter' && buscar())