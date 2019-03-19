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
           - title: Flujo de llamadas a los servicios 
             url: flujo-de-llamadas-a-los-servicios 
           - title: Dirección favorita 
             url: dirección-favorita
           - title: Pedido favorito 
             url: pedido-favorito
menu:
    - title: Objetivo
      url: /documentation/sistemas-informacion/objetivo
    - title: Llamada inicial de la app
      url: /documentation/sistemas-informacion/llamada-inicial
    - title: Servicio de aviso bloqueante
      url: /documentation/sistemas-informacion/servicio-aviso
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

### Flujo de llamadas a los servicios 
Para que la aplicación funcione de manera correcta, es necesario realizar un flujo concreto en las llamadas a los servicios. 

Cada vez que el usuario abre la aplicación, es decir, la primera acción que se haga una vez que el usuario selecciona abrir la app, independientemente de la acción quehaga,hayquellamaraun                servicio web que indica en nuestros sistemas, que se ha iniciado la app. Este servicio es user/trace/init

El flujo indicado, para grabar un pedido es el siguiente:  

1. GET Preload 
2. GET preload/country/settings 
3. GET /messages
4. GET Onboarding 
5. POST Token 
6. (*) ​ Ver obtener dirección 
7. POST /store/gethours 
8. GET /store/infoavailable/{shop}/{hour} 
9. GET order/catalog 
10. GET order/cart 
11. PUT order/product 
12. GET order/address 
13. POST order/address 
14. GET order/suggested 
15. POST order/suggested 
16. GET /store/paymentsmethod 
17. POST /order/save 
18. GET /order/tracker 
19. PUT order/tracker/shown

#### Dirección favorita 

Si el usuario selecciona añadir una dirección en la que ya ha realizado previamente un pedido, el flujo se vería modificado, ya que no será necesario que el usuario seleccione una dirección. 

1. GET Preload 
2. GET preload/country/settings 
3. GET /messages 
4. GET Onboarding 
5. POST Token 
6. GET /user/addresses 
7. POST /store/hours, informando el ID de la dirección favorita a través del campo “favourite_address_ID”. 
8. GET order/catalog
9. GET order/cart 
10. PUT order/product 
11. GET order/address 
12. POST order/address 
13. GET order/suggested 
14. POST order/suggested 
15. GET /store/paymentsmethod 
16. POST /order/save 
17. GET /order/tracker 
18. PUT order/tracker/shown

#### Pedido favorito

Si el usuario selecciona añadir un pedido favorito, el flujo se vería modificado, ya que no será necesario que el usuario seleccione una dirección y además, el contenido del pedido favorito, se añadirá directamente en el carrito del usuario. 

1. GET Preload 
2. GET preload/country/settings 
3. GET /messages 
4. GET Onboarding 
5. POST Token 
6. GET /user/orders 
7. POST /store/hours, informando el ID de la dirección favorita a través del campo “favourite_address_ID”. 
8. PUT order/favourites/{favorito_id} 
9. GET order/catalog 
10. PUT order/product 
11. GET order/address 
12. POST order/address 
13. GET order/suggested 
14. POST order/suggested 
15. GET /store/paymentsmethod 
16. POST /order/save 
17. GET /order/tracker 
18. PUT order/tracker/shown 

Actualmente, si el usuario navega para atrás en la app, puede llegar hasta volver a seleccionar de nuevo la hora, y en tal caso, se muestra un mensaje de alerta, indicando al usuario si está  seguro en que quiereabandonarelpedido.Enestecaso,sielusuarioacepta,hayquellamaraun nuevo servicio que limpia la caché del servidor. Este servicio es ​GET /order/cleancache.