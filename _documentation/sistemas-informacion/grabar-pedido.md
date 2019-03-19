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
    - title: Pago con tokenizacion
      url: /documentation/sistemas-informacion/tokenizacion
    - title: Pago con captura
      url: /documentation/sistemas-informacion/captura
    - title: Factura
      url: /documentation/sistemas-informacion/factura
    - title: Tracker (estados de pedidos)
      url: /documentation/sistemas-informacion/tracker
    - title: Localizador
      url: /documentation/sistemas-informacion/localizador
    - title: Listado de errores
      url: /documentation/sistemas-informacion/errores
    - title: Double Click
      url: /documentation/sistemas-informacion/double-click
---

### Factura 

Antes de llamar al servicio de grabar el pedido, hay que terminar de añadir los datos necesarios para localizar la dirección del usuario ( ​ ver el apartado de obtener dirección ​ ) y posteriormente, llamar al servicio POST /order/address para comprobar la dirección inicial introducida. Esta llamada al servicio, puede dar 3 circunstancias distintas.

● Una vez localizado el idportal exacto, se comprueba que la tienda que da servicio, no es la misma que con la que se inició al principio. El servicio devolverá:

[StringValue("The shop changue due to the new address")]

ShopChanged = 1022 

En este caso, se debe de mostrar un mensaje al usuario, indicando que tiene que volver a realizar el pedido. Se empezará el flujo en la pantalla de selección de hora,puestoqueyase tiene el idPortal correcto. 

● El identificador del portal, tiene un recargo en el pedido, es decir, podría ocurrir que el pedido tenga un recargo de por ejemplo 2 € . Cuando esto ocurra, automáticamente se añadirá un producto en el carrito,que no se podrá eliminar. En este caso, hay que mostrar un mensaje al usuario, para que sepa que el portal tiene un recargo. El servicio devuelve en este caso un valor "delivery_cost" > 0.

● Error. Si se produce un error al realizar la consulta a este servicio, se devolverá  [StringValue("An exception happened checking address.")] ErrorCheckingAddress = 2072 En este caso, se debe de mostrar un mensaje al usuario, indicando que se ha producido un error y tiene que volver a realizar el pedido. Se empezará el flujo en la pantalla de seleccionar una dirección.

Si la llamada al servicio orders/address ha sido correcta, hay que proceder a llamar al servicio de grabar el pedido /order/save, que a su vez, puede devolver distintos códigos, que implicarán tener que mostrar un mensaje al usuario para que realice una acción.

 El importe del pedido supera el máximo valor permitido. ErrorValidateOrderMaxAmount = 2073 
 
 El importe del pedido no supera el importe mínimo. ErrorValidateOrderMinAmount = 2075 
 
 El usuario ha superado el número de pedidos al día. ​ErrorValidateOrderMaxOrderDay = 2074

 Estas cadenas se guardarán como literales de la app.  