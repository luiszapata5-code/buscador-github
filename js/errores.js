const buscar = async (user) => {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`)
    if (!res.ok) throw new Error(`Usuario "${user}" no existe`)
    const data = await res.json()
    console.log(`Encontrado: ${data.login}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  } finally {
    console.log('Búsqueda terminada')
  }
}

buscar('luiszapata5-code')
buscar('usuario_que_no_existe_xyz')