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
        - title: Estructura   
          url: estructura   
        - title: Dependencias  
          url: dependencias
        - title: Productos simples y compuestos
          url: productos-simples-y-compuestos
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

### Catálogo de productos  

##### Estructura   
En el nuevo catálogo la información se estructura en 6 entidades (Categorías, subcategorías, tamaños, productos, elecciones e ingredientes) que se relacionan de la primera a la última mediante identificadores (en lugar de objetos completos).

	{   ​ 
	"categories" ​ : 
		[     
			{       ​ 
				"id" ​ : 0,       ​ 
				"name" ​ : ​ "string" ​ ,    
				"desc" ​ : ​ "string" ​ ,       ​ 
				"image_mini" ​ : ​ "string" ​ ,       ​ 
				"image_catalog" ​ : ​ "string" ​ ,       ​ 
				"image_landing" ​ : ​ "string" ​ ,       ​ 
				"draw_as" ​ : 0,       ​ 
				"subcategories" ​ : [         0       ]     }
		],   ​ 
		"subCategories" ​ : 
		[     
			{       ​ 
			"id" ​ : 0,       ​ 
			"name" ​ : ​ "string" ​ ,       ​ 
			"image_mini" ​ : ​ "string" ​ ,       ​ 
			"image_catalog" ​ : ​ "string" ​ ,       ​ 
			"image_landing" ​ : ​ "string" ​ ,       ​ 
			"products" ​ : [         0       ]     }   ],   ​ 
			"sizes" ​ : [     
				{       ​ 
				"id" ​ : 0,       ​ 
				"name" ​ : ​ "string" ​ ,       ​ 
				"price" ​ : 0,       ​ 
				"choices" ​ : [         0       ]     }   
				],   ​ 
				"choices" ​ : [     
					{       ​ 
					"id" ​ : 0,       ​ 
					"name" ​ : ​ "string" ​ ,       ​ 
					"description" ​ : ​ "string" ​ ,       ​ 
					"max" ​ : 0,       ​ 
					"min" ​ : 0,       ​ 
					"screen_order" ​ : 0,       ​ 
					"ingredients" ​ : [         0       ],       ​ 
					"default_ingredients" ​ : [         0       ]     }   
					],   ​ 
					"products" ​ : [     
						{ ​ 
							"id" ​ : 0,       ​ 
							"name" ​ : ​ "string" ​ ,       ​ 
							"description" ​ : ​ "string" ​ ,       ​ 
							"image_catalog" ​ : ​ "string" ​ ,       ​ 
							"image_landing" ​ : ​ "string" ​ ,       ​ 
							"half_allowed" ​ : ​ true ​ ,       ​ 
							"to_your_linking" ​ : ​ true ​ ,       ​ 
							"default_sizes" ​ : ​ 0 ​ ,       ​ 
							"sizes" ​ : [         0       ]     }   
						],   ​ 
					"ingredients" ​ : [     
						{       ​ 
							"id" ​ : 0,       ​ 
							"name" ​ : ​ "string" ​ ,       ​ 
							"image" ​ : ​ "string" ​ ,       ​ 
							"max" ​ : 0,       ​ 
							"price" ​ : 0,       ​ 
							"order" ​ : 0     
						}   
					] 
	}

##### Dependencias 

Los datos expuestos en el catálogo se estructuran como entidades maestras independientes,pero todas están relacionadas a través de sus IDsrespetandolajerarquía:Categoría → Subcategoría → Producto → Tamaño → Elección → Ingrediente. De esta forma, una entidad superior contendrá los IDs de las entidades que dependen de ella.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/14.PNG"/>
</p>

Para descender de nivel en el catálogo, solo es necesario recuperar los identificadores delarray               correspondiente.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/15.PNG"/>
</p>

##### Productos simples y compuestos

Para verificar si un producto es simple o compuesto, basta con comprobar el array de“choices”                correspondiente a un “Size”

Por ejemplo, el producto 999990001261684 – Lata Fanta Naranja es un producto simple porque el “size” de ese producto, no tiene ningún “choice”.

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/16.PNG"/>
</p>

Por otro lado, el producto 999990004249908 – Pizza Delicheese es un producto compuesto porque sus “sizes” tienen varios elementos en el array de “choices”. Es decir, ese producto tiene varias combinaciones. 

<p style="text-align: center;">
	<img src="/dox-theme/assets/images/docs/sistemas-informacion/17.PNG"/>
</p>