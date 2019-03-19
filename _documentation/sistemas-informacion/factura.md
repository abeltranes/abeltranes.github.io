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

### Factura 

Existen países en los que es necesario completar unos datos para que al realizar el pedido se genere una factura. Estas facturas son dinámicas, de manera que cada país puede solicitar una información u otra. 

Esta información de la factura, se obtiene en el servicio GET /order/address en la estructura: 

	"bill_fields": 
		[ 
			{  
				"label": "string",  
				"size": 0,
				"type": "string",  
				"id": 0,  "order": 0,  
				"value": "string",  
				"key": "string" 
			}   
		]

Los campos a los que hace referencia cada uno de ellos es: 

● label -> el nombre del campo a mostrar al usuario 

● size -> tamaño máximo del campo 

● type -> tipo de input 

● id -> sólo se tiene que enviar de vuelta el mismo valor 

● order -> como ordenar los campos en la pantalla 

● value -> valor introducido por el usuario 

● key -> sólo se tiene que enviar de vuelta el mismo valor