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
        - title: Reestablecer contraseña  
          url: reestablecer-contraseña  
        - title: Obtener y modificar datos personales del usuario  
          url: obtener-y-modificar-datos-personales-del-usuario
        - title: Obtener y eliminar medios de pago
          url: obtener-y-eliminar-medios-de-pago
        - title: Obtener y eliminar direcciones favorita 
          url: obtener-y-eliminar-direcciones-favorita
        - title: Obtener pedidos y cambiar un último pedido a favorito  
          url: obtener-pedidos-y-cambiar-un-último-pedido-a-favorito 
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

### Gestión de usuario
Existe una serie de servicios que no son obligatorios de utilizar para grabar un pedido, pero se necesitan para realizar otra serie de funcionalidades de la app. Estos servicios son los relacionados con un usuario registrado.

● GET /user/orders. Obtiene todos los pedidos realizados por un usuario.

● PUT /user/favorite/{order_id}. Pone un último pedido como favorito, añadiendo un nombre. 

● GET /user/addresses. Obtiene todas las direcciones en las que el usuario ha hecho un pedido. De este servicio, es importante la propiedad  

##### Reestablecer contraseña   
Para reestablecer la contraseña de un usuario, será necesario invocar el método recoverpassword de la API pasando a través del body de la petición la dirección de correo electrónico. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/12.PNG"/>
</p>

Este método no devolverá más que un código de respuesta HTTP.Si todo es correcto será “ 204 No content ”.

En ese momento el usuario recibirá en su correo electrónico un enlace con un hash.Traspulsar en el enlace se abrirá de nuevo la aplicación en una ventana apropiada para completar la nueva contraseña. 

La aplicación invocará entonces al método changepassword pasando por URL el hash y en el cuerpo de la petición la nueva contraseña.

changepassword/3EF94A0DEE24D5B5028EFE69A3D69F282641F7BE49C9AEBCF5DF07793C941850023EB131

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/13.PNG"/>
</p>

##### Obtener y modificar datos personales del usuario

El servicio para obtener los datos personales del usuario (nombre, apellidos, teléfono y fecha de nacimiento) es GET/user.

El servicio para modificar los datos personales del usuario (nombre, apellidos, teléfono y fecha de               nacimiento) es PUT/user.

##### Obtener y eliminar medios de pago

El usuario puede listar los medios de pago que tenga tokenizados y eliminarlos. Los servicios son GET /user/payments  y DETELE /user/payments/{payment_id}

##### Obtener y eliminar direcciones favorita

El usuario puede listar las direcciones en las que ha realizado algún pedido y eliminarlas. Los servicios son GET /user/addresses y DELETE /user/addresses/{address_id} 

##### Obtener pedidos y cambiar un último pedido a favorito 

El usuario puede listar todos los pedidos que ha realizado. Se diferencia entre “Últimos pedidos” y “Pedidos Favoritos”. Desde esta pantalla, también se podrá transformar un último pedido en un pedido favorito, añadiendo un nombre a ese pedido.

Los servicios a utilizar son: 

● GET /user/orders 

● DELETE /user/favorite/{order_id} 

● PUT /user/favorite/{order_id} 