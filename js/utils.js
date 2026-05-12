
export const formatDate = (date) => new Date(date).toLocaleDateString('es-CO')

export const truncate = (str, n) => str?.length > n ? str.slice(0, n) + '...' : str