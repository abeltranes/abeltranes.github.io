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
        - title: Promociones 
          url: promociones 
        - title: Obtener promociones  
          url: obtener-promociones
        - title: Ofertas
          url: ofertas
        - title: Menús
          url: menus
        - title: Promociones del carrito
          url: promciones-del-carrito
        - title: Obtener pantallas y productos de una promoción
          url: obtener-pantallas-y-productos-de-una-promoción
        - title: Obtener regalos de una promoción
          url: obtener-regalos-de-una-promoción
        - title: Aplicar promocion
          url: aplicar-promocion
        - title: Desaplicar promocion
          url: desaplicar-promocion
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
    - title: Pedido
      url: /documentation/sistemas-informacion/pedido
    - title: Usuario Anónimo
      url: /documentation/sistemas-informacion/anonimo
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

### Promociones

Las promociones pueden ser de distintos tipos:

● Tipo túnel​: las promociones tipo túnel, se comportan igual que si fueran un menú, es decir, que se mostrarán una serie de pantallas para elegir los distintos productos que forman parte de esa promoción.

● Tipo no túnel​: es el resto de promociones. No se mostrarán ningún “túnel” para que el usuario seleccione los productos, sino que la promoción se añadirá al carrito y cada vez que se añada un nuevo producto, el sistema de backoffice, recalculará si se puede aplicar la promoción que está en el carrito.

Las promociones que son de tipo túnel,tienen una propiedad que se llama “tunnel”.Dependiendo del valor de esta propiedad, al añadir una promoción, el comportamiento de la app será uno u otro. Si es tunnel, se tiene que llamar a los servicios que obtienen los productos que lo conforman.

Existe una particularidad con algunas promociones y esque no todas las promociones se pueden seleccionar desde la pestaña de “Ofertas”, ya que son, lo que en Telepizza se llaman promociones acumuladas. Las promociones que no se pueden seleccionar, vendrán indicadas con el valor "draw": false. ​ Lo que implica que desde la ventana de landing de promociones no aparecerá el botón de “Añadir”.

##### Obtener promociones 

Las ofertas y los menús tienen la misma estructura de salida. Se indica en cada uno de los elementos si la oferta o promoción es de tipo túnel y si tiene o no regalos asociados.

##### Ofertas

El endpoint es ​ /order/promotions/offers 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/32.png"/>
</p>

##### Menús

El endpoint es ​ /order/promotions/menus

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/33.png"/>
</p>

##### Promociones del carrito 

El endpoint es ​ /order/promotions/cart

En el carrito pueden aplicarse promociones especiales. Este tipo de promociones no disponen de imagen. Este método podrá invocarse siempre que haya productos en el carrito. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/34.png"/>
</p>

##### Obtener pantallas y productos de una promoción

Determinadas ofertas o menús implican añadir una colección de productos en el pedido. La presente funcionalidad devuelve un array de pantallas que a su vez, contienen un subconjunto del catálogo.

En cada una de las pantallas deberán mostrarse el conjunto de productos asociados a estas. 

Los productos, tamaños, elecciones e ingredientes guardan la misma estructurayrelaciones que el catálogo general de productos, con lasalvedaddequeaquínoseincluyenlascategoríasy subcategorías. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/35.png"/>
</p>

El endpoint es ​ /order/promotions/{ID_PROMOCION}/products 

##### Obtener regalos de una promoción 

Para obtener los regalos de una promoción, debemos enviar a la API el identificador de la promoción, que puede ser recuperado mediente los métodos de obtención de ofertas y menus. 

La recuperación de regalos está condicionada a que el campo has_gifts del objeto giftsdeficha promoción tenga el valor true.

Para obtener los regalos debemos indicar el valor ​ group_id ​​ del objeto ​ gifts ​​ de la promoción Si una promoción tiene regalos pero no hay unidades, ​ no ​​ se devolverán en la llamada a la API.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/36.png"/>
</p>

La estructura de salida para los regalos es la siguiente:

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/37.png"/>
</p>

El endpoint es ​ /order/promotions/{code}/gifts 

##### Aplicar promoción 

Antes de aplicar una promoción, debemos agregar al carrito todos los productos que puedan estar incluidos en la misma. En caso contrario recibiremos un mensaje de error.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/38.png"/>
</p>

Para aplicar una promoción, solo es necesario llamar a la API indicando el identificador de la                promoción. El ​body de la petición, siempre llevará la propiedad gifts_id.

Las promociones se aplican a todos los productos compatibles incluidos en el pedido. Si corresponde, el precio del producto y el total del pedido será modificado al agregar o eliminar una promoción.

La respuesta de la API indicará las promociones aplicadas en la propiedad promotions. Y los productos sobre los que se aplica la promoción mediante la propiedad is_promoted.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/39.png"/>
</p>

###### Sin regalo 

La propiedad ​ gifts_id ​se enviará vacía

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/40.png"/>
</p>

###### Con regalo

La propiedad ​ gifts_id ​​ se enviará con los identificadores de los regalos. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/41.png"/>
</p>

El endpoint es ​ /order/promotions/{ID_PROMOCION}

##### Desaplicar promoción

El funcionamiento inverso al procedimiento de aplicar promoción. Se debe enviar a la API el identificador de la promociónquedeseamoseliminar.Estaseeliminaráparatodoslosproductos a los que se haya aplicado. La API devolverá si corresponde, un carrito con los importes actualizados.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/42.png"/>
</p>

El endpoint es ​ /order/promotions/{ID_PROMOCION