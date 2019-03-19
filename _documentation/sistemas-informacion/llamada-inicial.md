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
    - title: Flujo de llamadas a los servicios 
      url: /documentation/sistemas-informacion/flujo-llamadas
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

### Llamada inicial de la app 
La nueva App de Telepizza 5.0 requiere nuevas funcionalidades o modificaciones de las actuales, que requiere una explicación detallada de las mismas.

Para mantener una compatibilidad con las versiones de la api, se ha desarrollado la siguiente funcionalidad: 

El desarrollo realizado consiste en que vosotros tenéis que hacer una primera llamada a una url, pasándole una serie de parámetros.

Ejemplo: 

https://testapiresolve.telepizza.com/resolve/preload?version=1.0.0&platform=android&device=movil&appid=global

El resultado de esta llamada sería un listado de países, junto con su cultura y la URL de la versión correspondiente de la API. Por ejemplo:

&lt;ArrayOfPreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-cl.telepizza.com/&lt;/api_url&gt; &lt;country&gt;Chile&lt;/country&gt; &lt;culture&gt;es-CL&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-default.telepizza.com/&lt;/api_url&gt; &lt;country&gt;Colombia&lt;/country&gt; &lt;culture&gt;es-CO&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-cl.telepizza.com/&lt;/api_url&gt; &lt;country&gt;Ecuador&lt;/country&gt; &lt;culture&gt;es-EC&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-es.telepizza.com/&lt;/api_url&gt; &lt;country&gt;España&lt;/country&gt; &lt;culture&gt;es-ES&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-ir.telepizza.com/&lt;/api_url&gt; &lt;country&gt;Irán&lt;/country&gt; &lt;culture&gt;fa-IR&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-pl.telepizza.com/&lt;/api_url&gt; &lt;country&gt;Polska&lt;/country&gt; &lt;culture&gt;pl-PL&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-pt.telepizza.com/&lt;/api_url&gt; &lt;country&gt;Portugal&lt;/country&gt; &lt;culture&gt;pt-PT&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;PreloadInfo&gt; &lt;api_url&gt;http://testapi-gb.telepizza.com/&lt;/api_url&gt; &lt;country&gt;United Kingdom&lt;/country&gt; &lt;culture&gt;en-GB&lt;/culture&gt; &lt;/PreloadInfo&gt; &lt;/ArrayOfPreloadInfo&gt;

Los parámetros de la llamada que pueden variar están en un json, y cada uno de ellos hará que se redireccione a una url u otra dependiendo, por ejemplo, del país y de la versión de la app. Por otra parte, el listado de países y su cultura residirá en otro json para poder hacer un matching adecuado entre las culturas y las versiones de la API.

Nosotros, por nuestra parte desde el archivo de configuración podemos, con asteriscos, obligar a que, independientemente del parche o versión que nos soliciten en la llamada, se retorne UNA única URL a convenir.

Por ejemplo, si en el archivo de configuración archivamos:

	"url": " ​ http://test.apirest.telepizza.es/obligada1/ ​ ",  
	"culture": "",  
	"major_version": 5,  
	"minor_version": 9,  
	"patch_version": "*",  
	"platform": "",  
	"device": "",  
	"appid": ""    

Y hacemos cualquiera de estas llamadas al Get de resolve: 

	o             &version=5.9.0&platf …

	o             &version=5.9.13&platf …

	o             &version=5.9.85&platf …

Todas devolverían el valor "http://test.apirest.telepizza.es/obligada1”. Y lo mismo ocurre para la minor_version y la major_version si se configuran con asteriscos.

También es posible, en esa misma llamada, pedir un patch o una minor versión vacíos, por si se requiriera en algún caso de uso concreto. Por ejemplo: 

	o             &version=5.0&platf …

	o             &version=5&platf …

Estos casos deben especificarse en el archivo de configuración, o de lo contrario solo devolverá el defecto que corresponda. A tales efectos, y para el ejemplo dado, en el archivo de configuración debería constar la siguiente configuración en cuanto a los campos de versionado: 

	{
		"url": "http://test.apirest.telepizza.es/", 
		"culture": "", "major_version": 5, 
		"minor_version": 0, 
		"patch_version": "", 
		"platform": "",  
		"device": "", 
		"appid": "" 
	}

	{
		"url": "http://test.apirest.telepizza.es/ ", 
		"culture": "", 
		"major_version": 5, 
		"minor_version": "",
		"patch_version": "", 
		"platform": "", 
		"device": "", 
		"appid": "" 
	}

	
Esto nos hace cuestionarnos la primera pantalla de los países, ya que dependiendo del país seleccionado, deberíais de hacer una llamada al apiresolve para que os diga a qué dirección url de la api os tenéis que conectar. 
 
 