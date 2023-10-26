//UTILITI EN COMUN PARA ABORTAR PETICIONES AL BACKEND.

export const loadAbort = () => {
  const controller = new AbortController()
  return controller
}
