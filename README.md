# Pasos de desarrollo

- Se tiene el componente Card que obtiene los datos de la api
- Se crea un componente llamado Noticia en donde entraran los props de cada noticia (notes)
- Se crea un useState para controlar cuando el card este abierto o cerrado, en base a un booleano
- Se crea un boton para alternar el estado
- Si no esta abierto se le extrae 5 elemento del arreglo de "notes" 
- Caso contrario se mantendra el arreglo tal cual es recibido de la api
- Se itera los "notes" para ser renderizados con el componente Noticia

# Tecnologias

- Se utilizo el entorno de desarrollo de vite
- Se utilizo react query para la toma de datos de la API
- Se uso SASS para las hojas CSS en formto SCSS
- Se utilizo la libreria de FontAwesome para lo iconos

# Pasos para el levantameinto de la app

- npm i
- npm i vite
- npm run dev