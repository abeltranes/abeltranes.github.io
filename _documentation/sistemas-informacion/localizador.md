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
    - title: Tracker (estado de pedidos)
      url: /documentation/sistemas-informacion/tracker
    - title: Listado de errores
      url: /documentation/sistemas-informacion/errores
    - title: Double Click
      url: /documentation/sistemas-informacion/double-click
---

### Localizador de tiendas   

Desde el menú de usuario, ya sea registrado o sin registrar, se puede acceder al localizador de tiendas. Para ello, hay que llamar al servicio POST /store/near, pasándole por pasándole por el body, la latitud y longitud de la dirección introducida por el usuario. Este servicio devolverá un array con las tiendas cercanas a este punto, así como toda la información necesaria para poder pintar la pantalla.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/45.png"/>
</p>

###### Ficha de tienda 

Una vez que se selecciona una tienda desde el localizador, se mostrará la información de dicha tienda.

Para ello hay que llamar al método GET /store/{store_id}.