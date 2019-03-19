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
    - title: Double Click
      url: /documentation/sistemas-informacion/double-click
---

### Listado de errores    

A continuación se muestra el listado de errores controlados de los servicios. 

En color azul, se muestran aquellos errores que si se producen, implican que se ha perdido la caché (bien por expiración o bien por error y que por lo tanto deben de equivaler a un 401 y mandar a la pantalla de inicio logado si es que el usuario lo está)

[StringValue("Success")] 

NoError = 0, 
 
[StringValue("Email not found in database")] 

ErrorMail = -1, 

[StringValue("Password and email don't match")] 

ErrorPassword = -2, 
 
[StringValue("This Email already exists in database")]             
EmailExists = -3, 

[StringValue("Email format is not valid")]             

InvalidEmail = -4, 

[StringValue("Password doesn't match with confirm password")]             

BothPasswords = -5, 

[StringValue("Phone number can not be NULL")]             

PhoneInt = -6, 

[StringValue("Invalid token")]             

ErrorToken = -7, 

[StringValue("Session expired")]             

ErrorTime = -8,

[StringValue("Some parameters are missing")]             

MissingParameters = -9, 
 
[StringValue("There was a problem with hash")]             

ErrorHash = -10, 

[StringValue("There was a problem retrieving the password")]             

ErroRecoverPass = -11, 

[StringValue("There was a problem sending the email")]             

ErrorSendMail = -12, 

[StringValue("The param 'culture' is not valid")]             

ErrorGetCulture = -13, 

[StringValue("The param 'name' is not valid")]             

ErrorParamName = -14, 

[StringValue("User and passwords don´t match")]             

InvalidCredentials = -15, 

[StringValue("Store not found")]             

StoreNotFound = -16, 

[StringValue("Method not allowed for register users.")]             

NotAllowedRegistered = -17, 

[StringValue("Invalid phone number")]             

PhoneInvalid = -18, 

[StringValue("This Email not exists in database")]

EmailNotExists = -19, 
 
[StringValue("Invalid parameter format")]             

ParameterInvalid = -19, 

[StringValue("Invalid latitude and longitud values")]             

LatLongInvalid = -20, 

[StringValue("Invalid datetime format. Try: " + Const.DateTimeFormat)]             

InvalidDateTime = -21, 

[StringValue("Invalid date format. Try: " + Const.DateFormat)]             

InvalidDate = -22, 

[StringValue("Invalid time format. Try: " + Const.TimeFormat)]             

InvalidTime = -23, 

[StringValue("Invalid radius value")]             

RadiusInvalid = -24, 

[StringValue("No valid data found")]             

NoDataFound = -25, 


[StringValue("Promotion not exists")]            

 NoPromotionFound = -26, 

[StringValue("An exception happened retrieving the promotion from DataBase.")]             

ErrorRetrievingPromotion = -27, 

[StringValue("Could not retrieve screens or screen names for promotion")]             

NoScreensOrName = -28,

[StringValue("The body parameter is null. Any of its components could have an invalid              format")]          

BodyParameterNull = -29, 
 
[StringValue("No stores were found near")]              

StoresNotFound = -30, 

[StringValue("Invalid parameter format")]              

ParameterInvalid = -31,         

[StringValue("User didn't login")]        

UserNotLogin = -32, 

[StringValue("Unexpected error")]            

 DefaultError = -99, 

[StringValue("Value not found in configuration.")]             

ErrorRetrievingValueConfiguration = 1000, 

[StringValue("Could not retrieve family ID from configuration file")]             

ErrorRetrievingFamilyID = 1001, 

[StringValue("Could not retrieve Business Area from configuration file")]             

ErrorRetrievingBusinessArea = 1002, 

​ [StringValue("Cache not exists")]             

ErrorCacheNotExists = 1003, 

[StringValue("Could not calculate total order.")]             

ErrorTotalOrder = 1004,

[StringValue("Could not retrieve any gifts in this promotion or gifts are out of stock")]             

NoGiftsOrOutOfStock = 1005, 
 
[StringValue("The coupon is redeemed")]             

RedeemedCoupon = 1006, 

[StringValue("The coupon is expired")]             

ExpiredCoupon = 1007, 

[StringValue("The coupon is invalid")]             

InvalidCoupon = 1008, 

[StringValue("The store is not affiliated with the promotion")]             

NotAffiliatedStore = 1009, 

[StringValue("The coupon is valid")]             

ValidCoupon = 1010,  

[StringValue("Exception")]             

Exception = 1011, 

[StringValue("Unplanned situation")]             

UnplannedSituation = 1012, 

[StringValue("The store is not affiliated with the promotion")]             

StoreNotAfiliated = 1013, 

[StringValue("The coupon has already been used")]             

CouponAlreadyUsed = 1014, 

[StringValue("The coupon is incorrect")]

IncorrectCoupon = 1015, 
 
[StringValue("The cart is empty")]             

ErrorEmptyCart = 1016, 

[StringValue("The number of products to be removed can not be negative")]             

ErrorNegativeUnits = 1017, 

[StringValue("Could not add favourite to the order")]             

ErrorFavouriteNotAdded = 1018, 

[StringValue("An exception happened retrieving shops from Here Maps")]             

SearchShopsByHereMapProvider = 1019, 

[StringValue("An exception happened finishing the payment capture")]             

ErrorFinishingPaymentCapture = 1020, 

[StringValue("No payment data in caché")]             

NoPaymentDataInCache = 1021, 

[StringValue("The shop changue due to the new address")]             

ShopChanged = 1022, 

[StringValue("Gateway ID not found in available payments list")]             

GatewayIDNotAvailable = 1023, 

[StringValue("Error Initializing payment engine")]             

ErrorInitializingPaymentEngine = 1024, 

[StringValue("Error Starting payment engine")]             

ErrorStartingPaymentEngine = 1025,

[StringValue("Error collecting payment data")]             

ErrorCollectingPaymentData = 1026, 
 
[StringValue("No operation with capture was found")]             

NoCaptureFound = 1027, 

[StringValue("ErrorFinishingPayment")]            

ErrorFinishingPayment = 1028, 

[StringValue("Payment or capture KO")]            

 ErrorPaymentKo = 1029, 

[StringValue("Capture Denied")]             

[EnumMember]             

CaptureDenied = 1031,               

[StringValue("Delivery cost can not be deleted or modified.")]             

[EnumMember]             

DeliveryCostCanNotBeDeleted = 1032,                

[StringValue("Cache can not be cleaned.")]             

[EnumMember]             

CacheCanNotBeCleaned = 1033,               

[StringValue("No transaction Id Received")]             

[EnumMember]             

NoTransactionReceived = 1034,               

[StringValue("Transaction Id does not match")]             

[EnumMember] 

InvalidTransaction = 1035,               

[StringValue("Pay type does not match")]             

[EnumMember]             

InvalidPayType = 1036, 
 
[StringValue("An exception happened retrieving the catalog from DataBase.")]             

ErrorRetrievingCatalog = 2000, 

[StringValue("An exception happened retrieving products from DataBase.")]             

ErrorRetrievingProducts = 2001, 

[StringValue("An exception happened retrieving favorite from DataBase.")]             

ErrorRetrievingFavorite = 2002, 

[StringValue("An exception happened retrieving user from DataBase.")]             

ErrorRetrievingUser = 2003, 

[StringValue("An exception happened retrieving the new order from DataBase.")]             

ErrorRetrievingNewOrder = 2004, 

[StringValue("An exception happened retrieving the store from DataBase.")]             

ErrorRetrievingStore = 2005, 

[StringValue("An exception happened retrieving the store from DataBase.")]             

ErrorRetrievingAssociatedStore = 2006,             

[StringValue("An exception happened adding new product line.")]             

ErrorAddingNewProduct = 2007,

[StringValue("An exception happened retrieving the configuration from DataBase.")]             

ErrorRetrievingConfiguration = 2008, 
 
[StringValue("An exception happened retrieving the Log Pedido from DataBase.")]             

ErrorRetrievingLogPedido = 2009, 

[StringValue("An exception happened creating a new Line Product.")]             

ErrorCreatingNewLineProduct = 2010, 

[StringValue("There was a problem retrieving the Countries")]             

ErrorGetCountries = 2011, 

[StringValue("There was a problem retrieving the Languages")]             

ErrorGetLanguages = 2012, 

[StringValue("There was a problem retrieving the addresses")]             

ErroRecoverAddresses = 2013, 

[StringValue("There was a problem retrieving the orders")]             

ErrorRetrievingOrders = 2014, 

[StringValue("There was a problem retrieving delivery info street map")]             

ErrorRetrievingdeliveryInfoStreetMap = 2015, 

[StringValue("There was a problem saving the order")]             

ErrorSaveOrder = 2016, 

[StringValue("There was a problem retrieving the order from Core")]             

ErrorGetCoreOrder = 2017,

[StringValue("An exception happened retrieving HTML from CMS.")]             

ErrorRetrievingHTML = 2018, 
 
[StringValue("An exception happened retrieving the promotions")]             

ErrorRetrievingOfertsAndPromotions = 2019, 


[StringValue("An exception happened retrieving the EvaluationLP")]             

ErrorDeletingEvaluationLP = 2020, 

[StringValue("An exception happened deleting PDVSNoProm ")]             

ErrorDeletingPDVSNoProm = 2021, 

[StringValue("An exception happened deleting PDVSNoProm")]             

ErrorRetrievingTrackingOrder = 2022, 

[StringValue("An exception happened checking user")]             

ErrorCheckingUser = 2023, 

[StringValue("An exception happened saving user ")]             

ErrorSavingUser = 2024, 

[StringValue("An exception happened updating user")]             

ErrorUpdatingUser = 2025, 

[StringValue("An exception happened updating user ")]             

ErrorUpdatingPassword = 2026, 

[StringValue("An exception happened inserting hash")]             

ErrorInsertingHashUser = 2026, 

[StringValue("An exception happened retrieving addressed ")]

ErrorRetrievingAddress = 2027, 
 
[StringValue("An exception happened inserting email")]             

ErrorInsertingEmail = 2028, 

[StringValue("An exception happened deleting email ")]             

ErrorDeletingEmail = 2029, 

[StringValue("An exception happened updating email")]             

ErrorUpdatingEmail = 2030, 

[StringValue("An exception happened renaming the order.")]             

ErrorRenamingOrder = 2031, 

[StringValue("An exception happened adding click and pizza.")]             

ErrorAddClickAndPizza = 2032, 

[StringValue("An exception happened adding click and pizza.")]             

ErrorDeletingClickAndPizza = 2033, 


[StringValue("An exception happened deleting address.")]             

ErrorDeletingAddress = 2034, 

[StringValue("An exception happened deleting order.")]             

ErrorDeletingOrder = 2035, 

[StringValue("An exception happened updating click and pizza.")]             

ErrorUpdatingClickAndPizza = 2035, 

[StringValue("There was a problem retrieving the hours")]             

ErrorRetrievingHoursAvailable = 2036,

[StringValue("There was a problem retrieving the payment methods")]             

ErrorRetrievingPaymentMethods = 2037, 
 
[StringValue("There was a problem retrieving the sizes strings")]             

ErrorRetrievingSizes = 2038, 

[StringValue("There was a problem retrieving the fields addresses strings")]             

ErrorRetrievingFieldsAddresses = 2039, 

[StringValue("Theorderdidnotpassthevalidation.Checkordertotalamountandthemax               number of orders per day.")]             

ErrorValidateOrder = 2049, 

[StringValue("The order has not been created")]             

ErrorCreateOrder = 2050, 

[StringValue("There was a problem retrieving shop info")]             

ErrorRetrievingShopInfo = 2051, 

[StringValue("An exception happened retrieving the streets.")]             

ErrorRetrievingStreets = 2052, 

[StringValue("Cannot retrieving screens for a promotion")]             

ErrorRetrievingScreensForAPromotion = 2053, 

[StringValue("Cannot retrieving price calculation info")]             

ErrorRetrievingPriceCalcInfo = 2054, 

[StringValue("An exception happened adding promotion to order.")]             

ErrorAddingPromotion = 2055,

[StringValue("An exception happened removing promotion to order.")]             

ErrorRemovingPromotion = 2056, 
 
 
[StringValue("An exception happened retrieving the screen names.")]             

ErrorRetrievingScreenNames = 2057, 

[StringValue("Worng coordinates.")]             

ErrorWrongCoordinates = 2058, 

[StringValue("An exception happened retrieving the dynamic bill.")]             

ErrorRetrievingDynamicBill  = 2059, 

[StringValue("An exception happened retrieving the gifts ")]             

ErrorRetrievingGifts = 2060, 

[StringValue("An exception happened deleting order line.")]             

ErrorDeletingLine = 2059, 

[StringValue("An exception happened getting GAC target.")]             

ErrorGettingGACTarget = 2060, 

[StringValue("An exception happened adding coupon.")]             

ErrorAddingCoupon = 2061, 


[StringValue("An exception happened validating coupon.")]             

ErrorValidatingCoupon = 2062, 

[StringValue("An exception happened validating user.")]             

ErrorValidatingUser = 2063,

[StringValue("An exception happened generating user token.")]             

ErrorGeneratingToken = 2064, 
 
[StringValue("An error has occurred adding the favourite to the order.")]             

ErrorAddingFavouriteToOrder = 2065, 

[StringValue("An error has occurred getting cities.")]             

ErrorGetCities = 2066, 

[StringValue("An error has occurred getting streets.")]             

ErrorGetStrets = 2067, 

[StringValue("An error has occurred getting streets by type")]             

GetShopsByStreetType = 2068,               

[StringValue("An error has occurred getting the delivery info of the order.")]             

ErrorGettingDeliveryInfo = 2068, 

[StringValue("An error has occurred getting the streets.")]             

ErrorGettingStreetsByCoordinates = 2069, 

[StringValue("An exception happened retrieving shops from Here Maps")]             

SearchShopsByHereMap = 2070, 

[StringValue("Cannot retrieving menu items")]             

ErrorGettingMenuItems = 2071, 

[StringValue("An exception happened checking address.")]             

ErrorCheckingAddress = 2072, 

[StringValue("The order did not pass the validation. Check order max amount.")] 

 ErrorValidateOrderMaxAmount = 2073, 
 
[StringValue("The orderdidnotpassthevalidation.Checkthemaxnumberofordersper               day.")]             

ErrorValidateOrderMaxOrderDay = 2074, 
 
[StringValue("The order did not pass the validation. Check order min amount.")]             

ErrorValidateOrderMinAmount = 2075, 

[StringValue("An error has occurred getting the delivery cost of the order.")]             

ErrorGettingDeliveryCost = 2076, 

[StringValue("The shop asigned is closed.")]             

ErrorShopClosed = 2077, 

[StringValue("An error has occurred searching streets.")]             

[EnumMember]             

ErrorSearchStrets = 2078,               

[StringValue("An exception happened retrieving literal from CMS.")]             

[EnumMember]             

ErrorRetrievingLiteral = 2079,               

[StringValue("An error has occurred getting shops with dataphone")]             

[EnumMember]             

GetDataphoneShops = 2080,               

[StringValue("There was a problem with the hour saving the order")]             

[EnumMember]             

ErrorSaveOrderTime = 2081,               

[StringValue("There was a problem with the Shop saving the order")]             

[EnumMember]

ErrorSaveOrderShop = 2082,               

[StringValue("An exception happened inserting hash ")]             

[EnumMember]             

ErrorInsertingHashUser = 2083,               

[StringValue("An exception happened updating click and pizza.")]             

[EnumMember]             

ErrorUpdatingClickAndPizza = 2084,               

[StringValue("An exception happened deleting order line.")]             

[EnumMember]             

ErrorDeletingLine = 2085,               

[StringValue("An exception happened getting GAC target.")]            

[EnumMember]            

ErrorGettingGACTarget = 2086,              

[StringValue("An error has occurred getting the delivery info of the order.")]             

[EnumMember]             

ErrorGettingDeliveryInfo = 2087,                 

[StringValue("An exception happened retrieving products prize from DataBase.")]             

[EnumMember]            

ErrorRetrievingProductPrice = 2088,               

[StringValue("An exception happened retrieving product from DataBase.")]             

[EnumMember]             

ErrorRetrievingProduct = 2089,               

[StringValue("The size is invalid.")]

[EnumMember]             

ErrorInvalidProductSize = 2090,               

[StringValue("An exception happened calculating product price.")]             

[EnumMember]             

ErrorCalcProductPrice = 2091,               

[StringValue("An exception happened retrieving promotion from database.")]             

[EnumMember]             

ErrorGettingPromotion = 2092,               

[StringValue("An exception happened getting Client target.")]             

[EnumMember]             

ErrorGettingClientTarget = 2093, 

[StringValue("There was a problem saving the favourite order")] 

[EnumMember] 

ErrorSaveFavouriteOrder = 2094,   

[StringValue("There was a problem saving the order address")] 

[EnumMember] 

ErrorSaveOrderAddress = 2095, 

[StringValue("An exception happened retrieving the special groups.")]        

ErrorRetrievingSpecialGroups = 2096,   

[StringValue("An exception happened adding new product line.")]         

ErrorRetrievingSurveyElectable = 2006,   

[StringValue("An exception happened setting the token")]         

ErrorSetToken = 2097,