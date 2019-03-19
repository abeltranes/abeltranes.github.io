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

### Pasarelas de pago

Cuando el pago se realice a través de una pasarela de pago externa, el flujo de la aplicación varía, y además, varía si el medio de pago requiere captura o no. 

Para conocer si el medio de pago es una pasarela externa, hay que remitirse a la información recibida a la hora de obtener los datos de la tienda (InfoAvailable). Para cada medio de pago existe una propiedad booleana  llamada “is_gateway” que indica si es una pasarela externa o no.

La app, debe de abrir un webview para realizar todo lo relacionado con el pago. 

##### Webview

###### Entrada 

Para pagar a través de una pasarela externa se debe hacer una llamada a “/web/gateway/{payment_id}/{billing_agreement}/{gateway_culture}?access_token=TOKENEJ EMPLO1234 de la siguiente forma:

/web/gatewayResponsive/{payment_id}/{billingAgreement}/{gatewayCulture}?access_token={a ccess_token}&platform={platform}&user={user}

● payment_id: id del medio de pago que se desee usar. 
● billing_agreement: booleano que indica si se desea realizar un nuevo acuerdo de cobro (guardar los datos de pago para futuras compras) 
● gateway_culture: cultura a usar en la pasarela, por ejemplo, ES-es. Este parámetro es clave por ejemplo, para la pasarela de pago de  Conexflow. 
● access_token: Parámetro por Querystring. Es el token que nos llega normalmente en el Bearer. 

Ejemplo:

/web/Gateway/20/false/ES-es?access_token=abcdefg12345 => Este sería un pago a través de PayPal, SIN acuerdo de cobro.

###### Billing Agreement 

La propiedad de “billing_agreement” vendrá definida por un checkbox que el usuario pueda marcar, cuando vaya a pagar,en la pantalla de selección de medio de pago.Es importante definir los casos en los que dicho checkbox estará disponible o no para ser marcado por el usuario. Por esta razón se dispondrá deunapropiedadnuméricadenominada“token_type”al momento de pedir la información de los medios de pago de la tienda (InfoAvailable). 

Los posibles valores que puede tomar este campo, y lo que representa cada uno, son:

Valor numérico 0 ​​ : El medio de pago NO es tokenizable, por lo tanto el checkbox no debería poder usarse. Esto implica que al llamar a la pasarela el campo “billing_agreement” debería ser False.

Valor numérico 1 ​​ : El medio de pago SÍ es tokenizable PERO con una restricción. Esta restricción consiste en que solamente se puede guardar un único token para este medio de pago por usuario. Esto significa que para saber si el checkbox debe estar disponible para el usuario hay que, primero, revisar si dicho usuario tiene tokens asociados a ese medio de pago (lo cual se conoceatravésdela llamada a “user/payments”) y, si no tiene ninguno, tendrá el checkbox dispkonible. Mientras que si tiene algún token asociado a dicho medio de pago el checkbox no estará disponible paraelusuario. El campo “billing_agreement” que se utiliza al llamar a la pasarela deberá ser False para este segundo caso; mientras que, por otro lado, será dependiente de que el checkbox esté marcado o desmarcado para pasar un True o False en el primer caso.

Valor numérico 2 ​​ : El medio de pago SÍ es tokenizable y sin restricciones, por lo tanto el checkbox debería estar activo siempre que se selecciona un medio de pago con este tipo de token. El campo “billing_agreement” que se utiliza al llamar ala pasarela es entonces dependiente de que el checkbox esté marcado o desmarcado para pasar un True o False respectivamente. 

###### Salida

Tras la navegación web por la pasarela seleccionada, y si todo ha sido correcto, ésta se redirigirá a “/web/Gateway/payment/ok ​ ”, y en dicha página sepodráencontrarunscriptenelquesesirven las variables: 

● Is_capture: Booleano que indica si la operación es con captura o no. 

● Transaction_id: String que se utilizará para comprobar el pago cuando se desee guardar el pedido (función aún no implementada).

###### Error 

Si ha habido algún fallo en el flujo, se redirigirá a “/web/Gateway/payment/Ko” en lugar de a la página de OK.