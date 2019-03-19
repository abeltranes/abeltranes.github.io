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
        - title: Obtener dirección 
          url: obtener-dirección 
        - title: España  
          url: españa
        - title: Portugal y Uk
          url: portugal-y-uk
        - title: Suiza 
          url: suiza
        - title: Ecuador y Panamá 
          url: ecuador-y-panamá
        - title: Colombia
          url: colombia
        - title: Resto de países
          url: resto-de-países
        - title:  Objeto Here Map
          url: objeto-here-map
        - title: Direcciones de las tiendas abiertas en REST para la búsqueda manual
          url: direcciones-de-las-tiendas-abiertas-en-rest-para-la-búsqueda-manual
        - title: Pantallas para completar dirección
          url: pantallas-para-completar-dirección
        - title: Para probar Multipaís
          url: para-probar-multipaís
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

### Obtener dirección   
Dependiendo del país, la búsqueda de la dirección se hará de una manera u otra. En todos los países exceptuando España, Ecuador y Panamá, siempre se pasará el objeto de HereMap al método de getHours. 

El modelo de vista que hay que mostrar en cada país, vendrá indicado en el servicio countries/settings, con la clave type_of_view_app. 

1: España 
2: UK 
3: Ecuador y Panamá 
5: Portugal 
6: Colombia 
7: Irán 
8: Suiza 
4: Resto de países

#### España  
<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/2.PNG"/>
</p>

Para el primer paso, hay que llamar a los servicios Rest para obtener la dirección que hay que mostrar en el GPS. El apirest es ​get adress\street. ​​Este servicio devolverá el objeto “simulado” del heremap mas el idPortal.

En caso que el usuario modifique los datos devueltos por la apiRest, nos tendréis que pasar un nuevo objeto HereMap, generado en este caso por vosotros, pero sin pasarnos el idPortal.

#### Portugal y UK
La entrada de búsqueda de calles, se hará por código postal que se mostrará en  la primera pantalla. Posteriormente, en la pantalla final se mostrará el listado de calles en el combo, para que el usuario seleccione la dirección concreta en el caso de Portugal y UK. Para Suiza, se dejará la caja de texto de la calle vacía, para que el usuario pueda introducir en este punto el nombre de la calle. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/3.PNG"/>
</p>

En Portugal, se mostrarán dos cajas de texto para introducir el código postal, y no habrá sugerencias de calles al igual que tampoco lo habrá en UK ni Suiza.

#### Suiza
La entrada de búsqueda de calles, se hará por código postal.  En las sugerencias que se muestran asociadas a lo que haya introducido el usuario en la pantalla principal, mostrar (si es posible), Nombre de Calle / CP / Localidad / nº portal si ya lo especifica usuario. Posteriormente, en la pantalla final se mostrará la siguiente información:

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/4.PNG"/>
</p>

El código postal introducido en la primera pantalla, y no se podrá modificar.
Un combo con las localidades asociadas a ese código postal. El usuario puede modificar este valor. Una caja de texto libre, para que el usuario introduzca el nombre de la calle, en caso que no lo tengamos de los datos del Here Map. 

#### Ecuador y Panamá 
La entrada de datos se tiene que hacer como está actualmente, es decir, se ha de buscar por Provincia, Localidad, etc. 

El servicio al que hay que llamar es ​ http://test.apirest.telepizza.es/address/addresslevels. Este servicio devuelve las localidades a pintar en el primer combo y las calles de cada una de las localidades para pintar en el segundo combo. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/5.PNG"/>
</p>

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/6.PNG"/>
</p>

Una vez seleccionado los valores en el combo, hay que hacer una llamada al servicio POST /address/portal para obtener el idPortal que será necesario para enviar posteriormente al servicio get/hours.

#### Colombia
La pantalla de búsqueda de dirección tiene que tener un combo con las ciudades posibles y posteriormente el usuario introducirá su dirección a través de dos cajas de texto, que luego serán las que haya que buscar en heremap. Adicionalmente, el usuario tendrá que introducir también el número de portal.

La búsqueda que se tenga que buscar en heremap, tendrá en cuenta el símbolo #, pero transformándolo en una “/” es decir será: 

caja texto 1 + “/” + caja texto 2 + “-” + caja texto 3 + ciudad 

Ejemplo: 98/15-11 bogota

Hay que cambiar la búsqueda en domicilio.  El apiRest al que hay que llamar es GET /address/cities y devuelve un array con el nombre de las ciudades a mostrar en el combo. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/7.PNG"/>
</p>

#### Resto de países
Por polígono. En la pantalla inicial se añadirá una caja para que el usuario introduzca la dirección y se busque la tienda por polígono. En la pantalla final, se introducirán los datos exactos de la dirección, para poder localizar el idPortal del callejero de Telepizza (provincia, localidad, nombre calle y número).

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/8.PNG"/>
</p>

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/9.PNG"/>
</p>

#### Objeto Here Map
Con la información introducida en estas pantallas, sólo se obtendrá la tienda que da servicio (excepto en España), pero no se obtiene la clave de portal necesario para unirlo al callejero de Telepizza. Esta información se solicitará al final de las pantallas, justo cuando se muestra el resumen del pedido para pagar. Es por ello, que se hace necesario completar parte de la información de la dirección.

Here map devuelve parte de la información necesaria en la búsqueda por latitud y longitud.

Ejemplo:

	https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.xml?app_id=CrijVGNOqIGewCmX4UXB&app_code=27PHPEzvGBXVrp4s7F_7_Q&gen=9&prox=51.497733,-0.139036,100&mode=retrieveAddresses

###### España
	<Address> 
		<Label>Calle Isla de La Palma, 29, 28703 San Sebastián de los Reyes (Madrid), España</Label> 
		<Country>ESP</Country> 
		<State>Comunidad de Madrid</State> 
		<County>Madrid</County> 
		<City>San Sebastián de los Reyes</City> 
		<Street>Calle Isla de La Palma</Street> 
		<HouseNumber>29</HouseNumber> 
		<PostalCode>28703</PostalCode> 
		<AdditionalData key="CountryName">España</AdditionalData> 
		<AdditionalData key="StateName">Comunidad de Madrid</AdditionalData> 
		<AdditionalData key="CountyName">Madrid</AdditionalData> 
	</Address>

###### Colombia
	<Address> 
		<Label>Vía Cota-Suba, 250017 Cota, Colombia</Label> 
		<Country>COL</Country> 
		<County>Cundinamarca</County> 
		<City>Cota</City> 
		<Street>Vía Cota-Suba</Street> 
		<PostalCode>250017</PostalCode> 
		<AdditionalData key="CountryName">Colombia</AdditionalData> 
		<AdditionalData key="CountyName">Cundinamarca</AdditionalData> 
	</Address>

##### UK
	<Address> 
		<Label>Palace Street, London, SW1E 5, United Kingdom</Label> 
		<Country>GBR</Country> 
		<State>England</State> 
		<County>London</County> 
		<City>London</City> 
		<District>St James's Park</District> 
		<Street>Palace Street</Street> 
		<PostalCode>SW1E 5</PostalCode> 
		<AdditionalData key="CountryName">United Kingdom</AdditionalData> 
		<AdditionalData key="StateName">England</AdditionalData> 
		<AdditionalData key="CountyName">London</AdditionalData>
	</Address> 

Viendo la información que nos llega de here map, los campos necesarios para localizar la clave de portal del callejero de Telepizza son:

• County 

• City 

• District 

• Street 

• HouseNumber 

• PostalCode

Este será el objeto HereMap que habrá que enviar al apirest get store/Hours, pasándole siempre dicho objeto y dependiendo del país, los valores indicados en los gráficos. 

Si la tienda que da servicio ala dirección indicada está cerrada en ese momento,el servicio hours devolverá la siguiente excepción. De esta manera, la app mostrará un mensaje indicandoquela tienda en esos momentos no presta servicio.

	{   
		"message": "The shop asigned is closed.",   
		"code": "2077" 
	} 

##### Direcciones de las tiendas abiertas en REST para la búsqueda manual.

	"store_info": {     
		"id": "00337",     
		"name": "MANUEL NOYA (USERA) (M)",    
		"phone_1": "915694688",     
		"phone_2": "",     
		"address": "Manuel Noya 15-17",     
		"location": "MADRID",     
		"take_away": false,
		"delivery": false,     
		"equipment": null,     
		"schedule": null   
		}

	"store_info": {     
		"id": "00145",     
		"name": "ZARAGOZA III (GERTRUDIS GOMEZ)",     
		"phone_1": "976734949",     
		"phone_2": "976735055",     
		"address": "Gertrudis Gómez de Avellaneda",     
		"location": "ZARAGOZA",     
		"take_away": false,     
		"delivery": false,     
		"equipment": null,     
		"schedule": null  
		}

##### Pantallas para completar dirección

En la pantalla final antes de realizar el pago, es dónde se va a completar la dirección de entrega.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/10.PNG"/>
</p>

Dependiendo del país, la información se solicitará de una manera uotra.Paraello,sehacreado un servicio que será el encargado de proporcionar esta información, para que sea el frontal el encargado de pintarlo.

El objeto que se va a devolver es el siguiente:

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/11.PNG"/>
</p>

● Principal_filter: se muestra todos los elementos necesarios para pintar la pantalla según el país
	o Label: texto a mostrar 
	o Type: indica si lo que hay que pintar en la pantalla es un combo, o una caja de texto o bien un número. 
	o Default_value: valor por defecto de la propiedad 
	o Values: posibles valores, por ejemplo, si es un tipo “combo”. 

● Secundary_filter: es el hueco del país a mostrar, es dinámico por país,  “piso, portal, ​ escalera, etc”. 

##### Para probar Multipaís

Códigos postales para hacer pruebas en Portugal, UK, Ecuador y Colombia. 

Portugal : Código postal, 1050-083   

UK Código postal, TW31ES   

Ecuador **ECUADOR ELIMINADOS, EL CONDOR   

Colombia 

Coordenadas:  4.69844,-74.04854 Carrera 18B 116, 16 