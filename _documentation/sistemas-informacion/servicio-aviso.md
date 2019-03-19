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
    - title: Re-Login
      url: /documentation/sistemas-informacion/re-login
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

### Servicio de aviso bloqueante 
Al iniciar la aplicación, hay que llamar a un servicio que puede o no mostrar un aviso al usuario.

/Messages

Este aviso, puede ser bloqueante, de manera, que si lo es, el usuario no podrá continuar navegando con la aplicación. Por ejemplo, si se ha hecho una nueva versión, que es totalmente incompatible con la que el usuario tiene instalada.

Este aviso, se va a realizar, a través de un json, que tiene que tener las siguientes características:

 ● Habrá un json por país. 
 
 ● Se podrá mostrar un aviso dependiendo de los siguientes parámetros:

    ○ platform: S.O,  Android, iOS 
 
    o * (todos) ○ Versión:

      ■ Release:              “5” 
 
      ■ Major:                  Valor o * (todas) 
 
      ■ Minor:                 Valor (si la major no es *) o * (todas)

 El mensaje, en caso de existir, y que se mostraría, tendría las siguientes características:

 ○ Mensaje:

    ■ title:                   Opcional 
 
    ■ text:                   Obligatorio 
 
    ■ image:                URL, Opcional
 
    ■ to_block: si el mensaje es bloqueante o no.

 Los avisos, ya sean bloqueantes o no, tienen que salir antes que el onBoarding.

 El diseño de los avisos será similar a las pantallas del onBoarding

 <p style="text-align: center;" >
 <img src="/dox-theme/assets/images/docs/sistemas-informacion/1.png" alt="Markdown Monster icon"/>
 </p>