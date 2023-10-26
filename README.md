# Proyecto: Clean Architecture con Vite y React TypeScript

En este proyecto se va a utilizar Clean Architecture con Vite y React TypeScript. A continuación, se va a explicar la manera de trabajar y estructurar el proyecto para seguir una misma línea de desarrollo.

## Estructura inicial del proyecto

Todas las carpetas de SRC son de uso común o reutilizables, por ejemplo, componentes comunes como un simple Input, hooks que se utilicen en varias vistas, etc.

- SRC
  - asseets
  - adapters
  - components
  - contexts
  - hooks
  - interceptors
  - models
  - pages
  - redux
  - services
  - styled-components

## Explicacion de Carpetas:

En la carpeta `pages` van a ir todas las vistas de nuestra App, ejemplo Home, Register, Login, etc. Dentro de cada vista se va a contener todo lo necesario para esa vista, también se van a reutilizar los NOMBRES de las carpetas de SRC en caso de que sea necesario por ejemplo:

- pages
  - Home
    - Home.tsx
    - index.ts
    - adapters
    - models
    - hooks
    - components
    - services
      ...

La carpeta `adapters` sirve para adaptar lo recibido desde el backend a un objeto común para toda la aplicación y no tener que estar usando el nombre de las variables del backend, entonces si en algún futuro cambia lo que recibimos del backend no hay que hacer todos los cambios en donde lo usemos, sino solamente en el adapter, tambien sirve si desde el backend recibimos muchos datos que no necesitamos, los adaptamos a travez de un adapter y lo convertimos en una Entidad que necesitemos.

La carpeta `models` es para todas las interfaces que utilizemos y la representación de nuestras entidades en Interfaces.

En la carpeta `redux` dentro se va a encontrar otra carpeta que se llame `states`, cada state representa una entidad, el store almacena todos los states , esta se vería así:

- redux
  - states
    - index.ts
    - user.tsx(ejemplo)
  - store.tsx

En la carpeta `services` iría todas las llamadas e interacciones con la API/Backend.

En la carpeta `styled-components` van a ir los styled-components que representan los estilos que podemos tener en la app.

En la carpeta `utilities` son para la reutilización de lógica, ejemplo una función para formatear la fecha.

## Cosas a tener en cuenta

- Siempre usar barrel por buena práctica.
- Siempre codear en inglés.
- Para interfaces usar la nomenclatura de c# y Pascal Case, Ejemplo IUser.
- Para variables y funciones utilizar Camel Case.
- Para estados globales utilizar Redux como por ejemplo el Usuario, por lo general si tienes varias entidades como Alumnos, Profesores lo ideal sería meterlos en el Redux.
- Para estados en vistas y pasar estados entre componentes que están medio lejos pero siempre en la misma vista sería bueno utilizar context.
- Se utiliza un alias para la carpeta src. todo lo que provenga de @/ hacer referencia a src.
- Para los fetch al backend se utiliza Axios ya que permite la cancelacion de las peticiones cuando estas ya fueron enviadas, ver el ejemplo para seguir la linea de desarrollo y buenas practicas (useFetchAndLoad.ts, example.service.ts, IAxiosCall.models.ts).
- Este es un video en donde se explica un proyecto estrucutrado de la misma forma para entenderlo mejor.
  https://www.youtube.com/watch?v=XEcZaKK38fg&list=PL42UNLc8e48TF9l07z_tLGHzmC_d-yfJJ&index=10
