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
    - title: Obtener dirección
      url: /documentation/sistemas-informacion/obtener-direccion
    - title: Gestión de usuario
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

### Re-Login  
Cuando se realiza la petición POST/token, y el usuario es valido, se guardará en BBDD el token generado para poder revalidar al usuario cuando se expire la caché. 

Este servicio retornará los siguientes datos: 



	"token_type": "bearer", 
	"expires_in": 31536000,
	"access_token": "pwODcD0FKNzzeXBj08CETU2zqVfEi3-8J4elIRAS8BnB5OzsemfMAdK3ThpFOxXjckWYx7GZa6Nh KMVwDWmNwjrhgoahBqM8DnLi_dM_pOOOUh9DZamurIjUN-4Iuh3087-hjUw0dY7M3IDe5nuory 1GZIF-jjk3NW-FjUjd7AiwEU5cs9a2dTlG4uvQRncLTyDej697SMu_gYg50jZB1oJtHh2NrfkofiLqTLe CynNylY7V-FMLzXoAu3yvAs2AdqilmtFCH377OS3QwwCkUnuGW7Mq1nln26_qdSd_9KNqrSpoUix jPznQFyRKuAZmrLXIDwQN7t-39zBXGmLl2A",
	"user_id": 91000000090993

Con esos datos, la app, guardará en el sistema el token y el id del usuario para evitar realizar un login cada vez que se expira la caché.

El método POST user/relogin devuelve un nuevo token que revalida al usuario siempre que ya se haya logado con anterioridad. No es necesario pasar el token de autorización en el header.

En el body se tienen que enviar los siguientes datos: 

	"access_token" : “string”,
	"user_id": 0 

Donde: 

"access_token" : access_token del usuario que se quiere revalidar y que la app tendrá guardado en el sistema. 

"user_id": id del usuario que al app tiene guardado en el sistema. 

Si todo ha ido Ok, el servicio retorna la siguiente información: 

	"token_type": "bearer", 
	"expires_in": 31536000,
	"access_token": "pwODcD0FKNzzeXBj08CETU2zqVfEi3-8J4elIRAS8BnB5OzsemfMAdK3ThpFOxXjckWYx7GZa6Nh KMVwDWmNwjrhgoahBqM8DnLi_dM_pOOOUh9DZamurIjUN-4Iuh3087-hjUw0dY7M3IDe5nuory 1GZIF-jjk3NW-FjUjd7AiwEU5cs9a2dTlG4uvQRncLTyDej697SMu_gYg50jZB1oJtHh2NrfkofiLqTLe CynNylY7V-FMLzXoAu3yvAs2AdqilmtFCH377OS3QwwCkUnuGW7Mq1nln26_qdSd_9KNqrSpoUix jPznQFyRKuAZmrLXIDwQN7t-39zBXGmLl2A",
	"user_id": 91000000090993

Si el usuario que se envia, no se ha logado con anterioridad el servicio retornará el siguiente mensaje:

	"message": "User didn't login", 
	"code": "-32" 