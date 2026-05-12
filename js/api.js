export const buscarUsuario = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  if (!res.ok) throw new Error('Usuario no encontrado')
  return res.json()
}

export const buscarRepos = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`)
  if (!res.ok) throw new Error('No se pudieron cargar los repos')
  return res.json()
}