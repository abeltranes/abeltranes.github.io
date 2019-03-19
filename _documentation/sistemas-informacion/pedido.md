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
        - title: Agregar productos al pedido   
          url: agregar-productos-al-pedido    
        - title: Productos simples  
          url: productos-simples
        - title: Productos compuestos
          url: productos-compuestos
        - title: Productos por mitades
          url: productos-por-mitades
        - title: Eliminar un producto 
          url: eliminar-un-producto
        - title: Respuesta de la api 
          url: respuesta-de-la-api  
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
    - title: Características de catálogo
      url: /documentation/sistemas-informacion/caracteristicas
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

### Pedido
##### Agregar productos al pedido 
Para agregar un producto a un pedido, con independencia del tipo o combinaciones del mismo,la estructura del JSON de entrada en la API es siempre la misma.

La información esencial a completar en todos los casos se corresponde con el identificador del producto o productos, tamaño y unidades.

Adicionalmente, una de las propiedades de los productos del carrito, es “editable”, que indica si ese producto en cuestión se puede eliminar o no del carrito, o bien si se puede incrementar o decrementar su número en dicho carrito. Este producto es el coste de reparto, que existe en algunos de los países en los que se encuentralaapp,por ejemplo Ecuador y Colombia. Si el valor “editable” viene a ​ false ​​ , entonces hay que ​ ocultar ​ en la aplicación la opción de ​ eliminar ​ este productos.

##### Productos simples 

Para agregar un producto simple, será necesario completar el identificador del producto en la propiedad FirstProduct y adicionalmente, el codigo de tamaño y unidades del mismo.

Dado que un producto simple no dispone de elecciones, la propiedad ​choices ​viajará como ​NULL.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/21.png"/>
</p>

En la imagen se detalla la relación entre las propiedades del JSON de entrada y el catálogo 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/22.png"/>
</p>

##### Productos compuestos

Para agregar un producto compuesto, será necesario completar el identificador del producto en la propiedad ​ FirstProduct y adicionalmente las elecciones en la propiedad ​choices, el código de tamaño y unidades del mismo.

Los productos compuestos deberán informar obligatoriamente la propiedad ​ choices.

La propiedad ​ SecondProduct ​​ no será informada.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/23.png"/>
</p>

En la imagen se detalla la relación entre las propiedades del JSON de entrada y el catálogo

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/24.png"/>
</p>

##### Productos por mitades 

Para los productos que permiten configuración por mitades, cada mitad se informará en las propiedades FirstProduct ​​ y ​SecondProduct

La propiedad ​ choices ​​ deberá ser informada

Las choices escogidas en cada una de las mitades, deberán ser compatibles entresi, al igual que la propiedad size.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/25.png"/>
</p>

La relación de propiedades es ​ exactamente igual ​ al producto compuesto.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/26.png"/>
</p>

##### Eliminar un producto 

Para eliminar un producto de un pedido, debemos indicar a la API el número de línea de dicho                  producto. Dicho valor puede recuperarse del carrito.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/27.png"/>
</p>

Eliminar la misma línea varias veces provocará un mensaje de error por parte de la API. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/28.png"/>
</p>

##### Respuesta de la API 

En cualquiera de los casos en los que se añade un producto a un pedido, la API siempre retornará un objeto carrito con la relación de productos, promociones y totales.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/29.png"/>
</p>