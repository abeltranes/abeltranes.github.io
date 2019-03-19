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
    - title: Grabar pedidos
      url: /documentation/sistemas-informacion/grabar-pedido
    - title: Localizador
      url: /documentation/sistemas-informacion/localizador
    - title: Listado de errores
      url: /documentation/sistemas-informacion/errores
    - title: Double Click
      url: /documentation/sistemas-informacion/double-click
---

### Tracker (estados pedidos)  

Cuando el usuario finaliza un pedido, se mostrará el tracker del mismo, mostrándose los estados por los que va pasando el pedido.

El estado del pedido va modificando cada cierto tiempo, por lo que hay que llamar al servicio del estado del tracker cada X segundos o minutos (ver dónde se tiene que poner en la configuración). 

El tracker sólo se puede mostrar a los usuarios que están registrados.

“/order/tracker”: 

El métodoGETorder/tracker se invoca sin necesidad de enviar un token en el request.Y devuelve el estado del último pedido realizado por el usuario. Los distintos estados por los que puede pasar un pedido son:

● 110: Recibido 

● 120: (Preparando los productos). Este estado tienequeserrealmentedosestados,porloque se cambiará de un estado “Estirando” a “Ingredientes”, cuando haya pasado X minutos.. 

○ Estirando 

○ Ingredientes 

● 130: Horneando 

● 140: Preparando el envío 

● 150: En reparto 

● 160: Entregado

“/order/tracker/{user_id}/{store_id}/{order_id}”:

El método GET order/tracker/{user_id}/{store_id}/{order_id} se invoca sin necesidad de enviar un token en el request. Y devuelve el estado actual del pedido, de la tienda y del usuario indicados. Dónde:

● user_id: String que indica el identificador del usuario. 

● store_id: String que indica la tienda dónde se completó el pedido. 

● order_id: String que indica el número de albarán que recibe el usuario en el mail de confirmación de pedido.

“/order/tracker/shown”: 

El método PUT order/tracker/shown se invoca sin necesidad de enviar un tokenenelrequest.Y actualiza única y exclusivamente el estado del log en CIPedido cuando se ha mostrado el tracker del último pedido completado por el usuario.


###### Encuestas al usuario

Existen dos servicios para las encuestas. Uno indica si X usuario, con un determinado dispositivo y con cierta versión de la app, es “elegible” (puede realizar) una encuesta. El segundo grabalos datos de la encuesta en BBDD. 

“/survey/electable”: 

Es el método que indica si puede realizar una encuesta. Se le pasa en el body los siguientes datos: 

	{
		"device_id": "string",
		"app_version": "string" 
	}

Donde “device_id” es el identificador único del dispositivo y “app_version” es la versión de la               aplicación que está usando

“/survey/save”: 

  {                
    "device_id": "string", 
    "app_version": "string",                 
    "fecha_pedido": "string",                 
    "num_albaran": 0,                 
    "id_tienda": "string",                 
    "puntuacion": 0,                 
    "comentario": "string",                 
    "tipo_encuesta": 0 
  } 

Donde: 

“device_id”: es el identificador único del dispositivo. 

“app_version”: es la versión de la aplicación que está usando. 

“fecha_pedido”: es el “timestamp” de la fecha y hora en que se eligió la entrega del pedido. 

“num_albaran”: es el número de albarán del pedido.

“id_tienda”: es el identificador de la tienda. 

“puntuación”: es la calificación que el usuario ha aportado. 

“comentario”: es el comentario que el usuario ha aportado. 

“tipo_encuesta”: es un numérico que, en un principio, solo debe de ser 0 (cero) ó 1 dependiendo del tipo de encuesta que es (satisfacción sobre el pedido o sobre la app). 