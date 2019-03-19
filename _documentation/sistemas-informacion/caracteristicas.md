---
# Page settings
layout: documentation-single # Choose layout: "default", "homepage" or "documentation-archive"
title: Documentation 1 # Define a title of your page
description: # Define a description of your page
keywords: # Define keywords for search engines

# Hero section
hero:
    title: Sistemas de Información
    text: Nueva App, funcionalidades Noviembre 2016, Versión 1.0
documentation:
        - title: Características del catálogos  
          url: características-del-catálogos   
        - title: Visualizar producto compuesto.  
          url: visualizar-producto-compuesto
        - title: Obtener precio de un producto
          url: obtener-precio-de-un-producto
menu:
    - title: Objetivo
      url: /documentation/sistemas-informacion/objetivo
    - title: Llamada inicial de la app
      url: /documentation/sistemas-informacion/llamada-inicial
    - title: Flujo de llamadas a los servicios 
      url: /documentation/sistemas-informacion/flujo-llamadas
    - title: Servicio de aviso bloqueante
      url: /documentation/sistemas-informacion/servicio-aviso
    - title: Re-Login
      url: /documentation/sistemas-informacion/re-login
    - title: Obtener dirección
      url: /documentation/sistemas-informacion/obtener-direccion
    - title: Getión de usuario
      url: /documentation/sistemas-informacion/gestion-usuario
    - title: Catálogo de productos
      url: /documentation/sistemas-informacion/catalogo
    - title: Pedido
      url: /documentation/sistemas-informacion/pedido
    - title: Usuario Anónimo
      url: /documentation/sistemas-informacion/anonimo
    - title: Promociones
      url: /documentation/sistemas-informacion/promociones
    - title: Cupones
      url: /documentation/sistemas-informacion/cupones
    - title: Country Settings
      url: /documentation/sistemas-informacion/country
    - title: Medios de pago
      url: /documentation/sistemas-informacion/pago
    - title: Pasarelas de pago
      url: /documentation/sistemas-informacion/pasarelas
    - title: Pago externo con tokenización
      url: /documentation/sistemas-informacion/tokenizacion
    - title: Pago externo con captura
      url: /documentation/sistemas-informacion/captura
    - title: Factura
      url: /documentation/sistemas-informacion/factura
    - title: Grabar pedido
      url: /documentation/sistemas-informacion/grabar-pedido
    - title: Tracker (estados de pedidos)
      url: /documentation/sistemas-informacion/tracker
    - title: Localizador
      url: /documentation/sistemas-informacion/localizador
    - title: Listado de errores
      url: /documentation/sistemas-informacion/errores
    - title: Double Click
      url: /documentation/sistemas-informacion/double-click
---

### Características del catálogos
El catálogo de Telepizza está formado por productos, que se caracterizan todos ellos por tener uno o varios tamaños.

En caso de ser un producto compuesto, cada tamaño, tiene una serie de elecciones que se pueden seleccionar. Es decir, para diferenciar si un producto es simple o compuesto,se comprobará si la propiedad choices[] es nula o no. 

Cada elección está agrupada dentro de un mismo conjunto.

Cada grupo, tiene una serie de elementos que se pueden elegir, y otros elementos que vienen por defecto en el producto. Estos elementos vienen indicados en las propiedades ​ingredients ​​y default_ingredients respectivamente.

Cada grupo, tiene un máximo de unidades que se puede seleccionar en total. Y a su vez, cada elección tiene un máximo de unidades. Ambos valores vienen indicados a nivel de grupo y a nivel de ingrediente con la propiedad ​max.​

Por ejemplo, “ingredientes”, tiene un máximo número de unidades por grupo, por ejemplo, que sólo se pueda seleccionar como mucho 8 ingredientes. Asimismo, se permite que cada opción,en este caso, cada ingrediente, tenga a su vez un máximo número de unidades. Es decir, si nos encontramos en el grupo de “ingredientes” que el máximo por grupo es 8 y por ejemplo, que el bacon sólo puede cogerse 2 unidades, tendríamos que sólo se pueden coger como máximo 2 de bacon y 6 del resto del grupo de ingredientes, hasta un máximo de 8 en total.

Existe un caso especial, que es cuando un grupo tiene únicamente una elección, por ejemplo, el caso de “Gratinado”. En este caso, el catálogo devolverá un grupo, con una única elección y el frontal, deberá pintar la opción de “No”.

Todos los productos, tienen asociadas dos imágenes, una la que aparece en el listado dentro del catálogo, y otra imagen, que es la de la landing del producto, es decir, la imagen más grande. Estas dos imágenes vienen indicadas con las siguientes propiedades:

● image ​​ _​​landing 

● image_catalog

Las categorías de productos vienen agrupados en subgrupos. Por ejemplo, las bebidas tendrán subgrupos como “500 ml”, “botellas”, etc.

Cada categoría de productos, se tiene que mostrar de una manera distinta en la app,por ejemplo, las pizzas y las pastas,se tienen que mostrar agrupadas por el nombre del subgrupo,por ejemplo “las destacadas”, “para los queseros”, etc, y sin embargo otros grupos,como por ejemplo el de las bebidas, se tiene que agrupar mostrando una imagen del subgrupo, en lugar del nombre.

Para saber cómo hay que mostrar una agrupación u otra, se utilizará el campo draw_as que vendrá informado en el objeto ​ Categories.

● 0: se muestra el nombre de la subcategoría. 

● 1: se muestra la imagen de la subcategoría

##### Visualizar producto compuesto.

En la nueva aplicación, se van a mostrar los ingredientes de un producto compuesto,de manera distinta a la web actual.Estaa grupación, consiste en mostrar en distintas pantallas,un conjunto de alternativas concretas. De manera, que tiene que venir informado,el conjunto de alternativas que se quiere mostrar en cada una de las distintas pantallas. Por ejemplo, en las imágenes adjuntadas, se mostrarán todos los ingredientes en 3 pantallas distintas.

● En una primera pantalla, se quiere mostrar los grupos de quesos, salsas y gratinado. 

● En la segunda pantalla, el resto de ingredientes 

● En la tercera pantalla, los posibles extras.

Cada producto compuesto, podrá tener sus propias pantallas, de manera, que puede ser que un producto compuesto, tenga todas las alternativas en una única pantalla y el resto de productos en 3. Dónde mostrar cada grupo de ingredientes, vendrá informado en el campo ​ screen_order, de manera que este campo tendrá el siguiente formato: 1X, 2X, 3X. El primer dígito indicará la pantalla en la que se tiene que mostrar, y el segundo, el orden dentro de la misma pantalla.

Ejemplo:

Salsas: 11 -> En la primera pantalla en la posición 1 

Quesos: 12 -> En la primera pantalla en la posición 2 

Ingredientes: 21 -> En la segunda pantalla en la posición 1

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/18.png"/>
</p>

##### Obtener precio de un producto

Dado que la configuración de un producto compuesto puede implicar que el precio varíe, existe el endpoint /order/catalog/price.

El endpoint espera en el body de la petición un array de elecciones separados por mitades:

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/19.png"/>
</p>

Y siempre devolverá un objeto “price” con el resultado de la consulta a la base de datos.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/20.png"/>
</p>

Salvo excepción, el método siempre devolverá un precio que podrá o no ser correcto. Esto esasí porque el núcleo no valida que la combinación de elecciones sea correcta ala hora de devolver el precio, por lo que en caso de error, se devolverá el precio de la combinación por defecto.

Si se trata de un producto simple:

● las propiedades “choices” de “FirstProduct” y “SecondProduc” viajarán como nulas 

● La propiedad “id” de SecondProduct” viajará vacía. 

Si se trata de un producto compuesto: 

● la propiedad “choices” de “SecondProduc” viajará como nula 

● La propiedad “id” de SecondProduct” viajará vacía.

Si se trata de un producto compuesto por mitades, todas las propiedades deberán viajar informadas. 