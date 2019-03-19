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
    - title: Localizador de tiendas
      url: /documentation/sistemas-informacion/localizador
    - title: Listado de errores
      url: /documentation/sistemas-informacion/errores
---

### Listado de errores    

Utilizamos DoubleClick cuando se inicializa la aplicación por primera vez y cuando se hace un pedido. Para cada caso lo que se hace es cargar en el DOM un elemento '<img>' de un píxel con una url específica, donde se le pasan distintos parámetros. Las URLs son: 

Entorno de pruebas

	Init

	Order 
		https://8556045.fls.doubleclick.net/activityi;src=8556045;type=sales ;cat=telep0;qty=1;cost=[cost];u1=[visitorId];u2=[visitorLastOrderDat e];u3=[visitorRegisterDate];u4=[device];u5=[pageCurrent];u6=[pagePre vious];u7=[pageCategory];u8=[pageSubCategory];u9=[session];u10=[visi torLoginState];u11=[quantity];u12=[store];u13=[transactionDate];u14= [transactionId];u15=[transactionShippingMethod];u16=[transactionSubt otal];u17=[transactionTotal];u18=[transactionTax];u19=[transactionPa ymentType];u20=[transactionProducts];dc_lat=[dc_lat];dc_rdid=[dc_rdi d];tag_for_child_directed_treatment=[tag_for_child_directed_treatmen t];ord=[ord]? 

Entorno de producción 

	Init
		https://5484502.fls.doubleclick.net/activityi;src=5484502;type=corp; cat=telep003;dc_lat=[dc_lat];dc_rdid=[dc_rdid];tag_for_child_directe d_treatment=[tag_for_child_directed_treatment];ord=1?

	Order 
		https://5484502.fls.doubleclick.net/activityi;src=5484502;type=sales ;cat=telep00;qty=1;cost=[cost];u1=[visitorId];u2=[visitorLastOrderDa te];u3=[visitorRegisterDate];u4=[device];u5=[pageCurrent];u6=[pagePr evious];u7=[pageCategory];u8=[pageSubCategory];u9=[session];u10=[vis itorLoginState];u11=[quantity];u12=[store];u13=[transactionDate];u14 =[transactionId];u15=[transactionShippingMethod];u16=[transactionSub total];u17=[transactionTotal];u18=[transactionTax];u19=[transactionP aymentType];u20=[transactionProducts];dc_lat=[dc_lat];dc_rdid=[dc_rd id];tag_for_child_directed_treatment=[tag_for_child_directed_treatme nt];ord=[ord]?