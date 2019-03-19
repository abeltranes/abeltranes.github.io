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

### Pago externo con tokenización

Si el usuario selecciona un medio de pago que ya tiene tokenizado, no es necesario abrir un webview, ya que no se va a abrir la pasarela de pago. 

Si los medios de pago admiten token, hay que comprobar si el usuario es registrado y tiene ya token asociados. Para ello hay que llamar al servicio GET /user/payments

###### Entrada 

Para pagar mediante la tokenización de los medios de pago, se debe hacer una llamada a “/payment/gateway/token” con la siguiente estructura de datos en el body.

	{ 
		"basic_info": { 
			"payment_method_id": 0, 
			"order_description": "string", 
			"billing_agreement_description": "string"   
			}, 
		"card_number": "string" 
	}

Donde:

● payment_method_id: id del medio de pago que se desee usar. 

● order_description: Descripción del pedido en el medio de pago. (Se está estudiando aún si este parámetro se recibirá desde la app o no). 

● billing_agreement_description: Descripción del acuerdo de pago en el medio de pago.(No es relevante en los pagos con token ). 

● card_number: Números de la tarjeta de crédito (ofuscada con los asteriscos) 

###### Salida

No hay que hacer ninguna redirección ni cargar ninguna página externa. El método devuelve los siguientes parámetros (funciona igual que el resto de métodos de la Api): 

● is_capture: Booleano que indica si la operación es con captura o no. 

● transaction_id: String que se utilizará para comprobar el pago cuando se desee guardar el pedido.