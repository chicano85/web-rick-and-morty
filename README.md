# Evaluación final - Módulo 3

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty,
que podemos filtrar por el nombre del personaje. He usado React para realizarlo.

# 1. Listado de personajes

En primer lugar, hay que realizar una web con el listado de personajes de Rick and Morty. Para eso,
utilizo el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos
devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno hay que pintar:
•Foto
•Nombre
•Especie

# 2. Filtrado de personajes

Una vez tenga el listado de personajes en pantalla, la segunda parte consiste en poder
buscarlos por nombre. Para eso, añado un <input> a la interfaz, de forma que al ir escribiendo
un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

# 3. Componentes

El listado debe tener los siguientes componentes como mínimo:
•Componente para los filtros.
•Componente para el listado.
•Componente para la tarjeta de cada personaje del listado.
•Componente para el detalle de cada personaje.

# 4. Detalles de personajes

Además, he implementado una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su
información aparece a pantalla completa. Para hacer esto he usado rutas y React router. En la
pantalla de detalle aparece además de la foto, nombre y especie, el planeta de origen, el número de
episodios en los que aparece y si está vivo o muerto.

# 5. Otros detalles

Otras mejoras que he implementado han sido:

•Para cuidar la semántica, el campo de texto está recubierto por una
etiqueta <form />.
•Cuando en el campo de filtrado pulsamos intro el navegador no navega
ni cambia la ruta.
•Se filtra independientemente de que la usuaria introduzca el texto en mayúsculas
o minúsculas.
•Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto muestra el texto que tenía anteriormente.
•Url compartible: si visitamos esa URL directamente en el navegador se ve el detalle del personaje. Además, en el caso de que se navegue a una URL inexistente, se muestr el mensaje: "El personaje que buscas no existe".
