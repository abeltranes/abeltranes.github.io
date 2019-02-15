---
layout: default
title: BulkSales Services
nav_order: 2
published: true
---

# BulkSales Services
{: .no_toc }


**Client:** | Telepizza
**Department:** | 
**Proyect:** | BulkSales Services v1.0
**Document:** |   
**Reference:** |   
**Version:** | 1.0
**Date:** | 04 January 2019
{: .fs-6 .fw-300 }

## Index
{: .no_toc .text-delta }

1. TOC
{:toc}

---

**Document status sheet**

Version | Date | Description | Author
:--: | :--: | :--: | :--: 
1.0 | 04/01/2019 | BulkSales Services | Vector
   |   |   |   
{: .fs-6 .fw-300 }


# Introduction

## Purpose and scope of the document 

The purpose of this document is to describe the services used in the BulkSales application.

## Definitions and acronyms

Name | Definition
:--: | :--:
TPZ     | **Telepizza**           
   |   
   |

## References

References |   | Description
:--: | :--: | :--:
   |   |   
   
# API Services Description

The BulkSales APIs allow to load Sales and Expenses in two different ways:  
* Massive load.  
* Manual load. 

![img01.png]({{site.baseurl}}/docs/img01.png)

![img02.png]({{site.baseurl}}/docs/img02.png)

##  Generate WSO2 Access Token 

In order to invoke the BulkSales API published in WSO2, it is necessary to previously generate an access token.

The following cURL command shows how to generate an WSO2 access token using the Client Credentials grant type: 

```` 
curl -k -d "grant_type=client_credentials" \      
		-H "Authorization: Basic Base64(consumer-key:consumer-secret)" \ 
		https://api-aws.telepizza.com/token 
````
		
````
ID		GET
		https://api-aws.telepizza.com/token
Description 	Generate Access Token
Entry 		Header:
 		  Authorization: Basic <token>
 		  Content-Type: application/x-www-form-urlencoded
		Body
 		  grant_type: client_credentials
Exit 		OK: Code 200.
		String with the fyle type
Actions 	This service generate an WSO2 access token.
````

## Sales – Load CSV 

Load sales records from a csv. 

### Get the file type: 
  
This service is used to obtain the type of file loaded.

```` 
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/uploader/fileType
Description 	Get the type fily: Sales-Expenses
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		{
		  “File”: <csv_file_base64>
		}
Exit 		OK: Code 200.
		String with the fyle type
Actions	 	This service will support the use of APIs and the web.
````
  
### Upload File Service:

Load the csv file to read the records. 

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/uploader/fileUpload
Description 	Load the csv file to read the records.
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		{
 		  “File”: <csv_file_base64>
		}
Exit 		OK: 200.
		Body: JSON with records that failed:
		[ { “shop:” string,
 		    “dateSale”: string,
 		    “scope”: string,
  		    “scopeDes”: string,
  		    “enpe”: string,
  		    “enpeDes”: string,
  		    “result”: string,
  		    “dateExpense”: string,
   		    “codeExpense”: string,
   		    “amountExpense”: string,
   		    “dateBill”: string,
   		    “numberBill”: string,
   		    “amountBill”: string
		}]
Actions 	This service will support the use of APIs and the web.
````

Once the corresponding validations have been made about the type of file and its records (correct file and mandatory fields filled in), the following checks and calls to the services will be made:

* Checking Store field: Check that the store that comes in the csv file corresponds to valid store. Service defined in point 4.1.1  
* Checking the fields Tax1, Tax2, Tax3, SurchargeTax1 and SurchargeTax2: Check that the types of Taxes entered in these fields correspond to the correct taxes for the country indicated. Service defined in point 4.1.2 

Check the quantities entered:  
* Check that the values entered are not null or empty.  
* For each of the channels and areas we carry out the following operations:  
	* Check that the order number is greater than 0.  
	* Calculate the total amounts: 

	If taxes are greather than 0:  
    Total1 = ((amount1 * 100) / tax1) + amount   
    Total2 = ((amount2 * 100) / tax2) + amount2  
    Total3 = ((amount3 * 100) / tax3) + amount3
    
    If any of the taxes is 0 the Total will be equal to the Amount of the tax that was 0, for example, if tax1 = 0: 
    
    Total1 = amount1
    
    Total = Total1 + Total2 + Total3
    
    	* Calculate Total net:
	
	
	&nbsp;
	
	If taxes and amounts are greather than 0:  
        TotalNet1 = (amount1 * 100) / tax1  
    	TotalNet2 = (amount2 * 100) / tax2  
	TotalNet3 = (amount3 * 100) / tax3  
	If any of the taxes is 0 the Total will be equal to the Amount of the tax that was 0, for example, if tax1 = 0:  
	TotalNet1 = amount1  
	TotalNet = TotalNet1 + TotalNet2 + TotalNet3 
   
After performing these calculations, the sales record and the log record are inserted or updatedin bbdd.

### Get currency

This service obtain the currencies for the country.  

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCurrency
Description	Get the currency
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Parameters:
 		  “countryCode”: Code for the country
Exit 		OK: Code 200.
		String with the currency code.
Actions 	This service will support the use of APIs and the web. 
````

### Get countries

This service obtain the countries.

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountries
Description	Get the listo f countries
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
Exit 		OK: Code 200.
		String with the list of countries
Actions 	This service will support the use of APIs and the web.
````

### Saves Sales

Save sales record.

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesales
Description	Save the record
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		[
 		 {
 		  "date": "Store Number assigned by Telepizza SAU, with 5 digits",
 		  "shop": "Sales date",
 		  "tax1": "type 1 of tax used on Telepizza",
 		  "tax2": "type 2 of tax used on Telepizza",
 		  "tax3": "type 3 of tax used on Telepizza",
 		  "surchargeTax1": "Surcharge Tax 1",
 		  "surchargeTax2": "Surcharge Tax 2",
 		  "s1VID": "Total Surcharge 1 Online Delivery Sales",
 		  "s2VID": "Total Surcharge 2 Online Delivery Sales",
 		  "vid": "Online Delivery Sales",
 		  "i1ID": "Total TAX1 Online Delivery Sales",
 		  "i2ID": "Total TAX2 Online Delivery Sales",
 		  "i3ID": "Total TAX3 Online Delivery Sales",
 		  "oid": "Total Orders Online Delivery Way",
 		  "s1VIR": " Total Surcharge 1 Online Take Away Sales ",
 		  "s2VIR": " Total Surcharge 2 Online Take Away Sales ",
 		  "vir": "Online Take Away Sales",
 		  "i1IR": "Total TAX1 Online Take Away Sales",
 		  "i2IR": "Total TAX2 Online Take Away Sales",
 		  "i3IR": "Total TAX3 Online Take Away Sales",
 		  "oir": "Total Orders Online Take-Away Way",
 		  "s1VTD": " Total Surcharge 1 Phone Delivery Sales ",
 		  "s2VTD": " Total Surcharge 2 Phone Delivery Sales ",
 		  "vtd": "Phone Delivery Sales",
 		  "i1TD": "Total TAX1 Phone Delivery Sales",
 		  "i2TD": "Total TAX2 Phone Delivery Sales",
 		  "i3TD": "Total TAX3 Phone Delivery Sales",
 		  "otd": "Total Orders Phone Delivery Way",
 		  "s1VTR": " Total Surcharge 1 Phone Take Away Sales ",
 		  "s2VTR": " Total Surcharge 2 Phone Take Away Sales ",
 		  "vtr": "Phone Take Away Sales",
 		  "i1TR": "Total TAX1 Phone Take Away Sales",
 		  "i2TR": "Total TAX2 Phone Take Away Sales",
 		  "i3TR": "Total TAX3 Phone Take Away Sales",
 		  "otr": "Total Orders Phone Take-Away Way",
 		  "s1VCL": " Total Surcharge 1 Cash Till Restaurant Sales ",
 		  "s2VCL": " Total Surcharge 2 Cash Till Restaurant Sales ",
 		  "vcl": "Cash Till Restaurant Sales",
 		  "i1CL": "Total TAX1 Cash Till Restaurant Sales",
 		  "i2CL": "Total TAX2 Cash Till Restaurant Sales",
 		  "i3CL": "Total TAX3 Cash Till Restaurant Sales",
 		  "ocl": "Total Orders Cash Till Restaurant Way",
 		  "s1VCR": " Total Surcharge 1 Cash Till At Store Sales ",
 		  "s2VCR": " Total Surcharge 2 Cash Till At Store Sales ",
 		  "vcr": "Cash Till At Store Sales",
 		  "i1CR": "Total TAX1 Cash Till At Store Sales",
 		  "i2CR": "Total TAX2 Cash Till At Store Sales",
 		  "i3CR": "Total TAX3 Cash Till At Store Sales",
 		  "ocr": "Total Orders Cash Till At Store Way"
		 }
		]
Exit 		OK: 200.
		Body: JSON with records that failed:
		[ { “shop:” string,
 		    “dateSale”: string,
 		    “scope”: string,
 		    “scopeDes”: string,
 		    “enpe”: string,
 		    “enpeDes”: string,
 		    “result”: string,
 		    “dateExpense”: string,
 		    “codeExpense”: string,
 		    “amountExpense”: string,
 		    “dateBill”: string,
 		    “numberBill”: string,
 		    “amountBill”: string
		}]
Actions 	This service will support the use of APIs and the web.
````

### Save Sales Background

To load large files you can use the **savesalesback** service that saves the record in the background.
Later you can check the status of the process from the **getUserProcessResult** and **GetUserProcess**
services.

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesalesback
Description 	Save the record in background
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		[
 		 {
 		  "date": "Store Number assigned by Telepizza SAU, with 5 digits",
 		  "shop": "Sales date",
 		  "tax1": "type 1 of tax used on Telepizza",
 		  "tax2": "type 2 of tax used on Telepizza",
 		  "tax3": "type 3 of tax used on Telepizza",
 		  "surchargeTax1": "Surcharge Tax 1",
 		  "surchargeTax2": "Surcharge Tax 2",
 		  "s1VID": "Total Surcharge 1 Online Delivery Sales",
 		  "s2VID": "Total Surcharge 2 Online Delivery Sales",
 		  "vid": "Online Delivery Sales",
 		  "i1ID": "Total TAX1 Online Delivery Sales",
 		  "i2ID": "Total TAX2 Online Delivery Sales",
 		  "i3ID": "Total TAX3 Online Delivery Sales",
 		  "oid": "Total Orders Online Delivery Way",
 		  "s1VIR": " Total Surcharge 1 Online Take Away Sales ",
 		  "s2VIR": " Total Surcharge 2 Online Take Away Sales ",
 		  "vir": "Online Take Away Sales",
 		  "i1IR": "Total TAX1 Online Take Away Sales",
 		  "i2IR": "Total TAX2 Online Take Away Sales",
 		  "i3IR": "Total TAX3 Online Take Away Sales",
 		  "oir": "Total Orders Online Take-Away Way",
 		  "s1VTD": " Total Surcharge 1 Phone Delivery Sales ",
 		  "s2VTD": " Total Surcharge 2 Phone Delivery Sales ",
 		  "vtd": "Phone Delivery Sales",
 		  "i1TD": "Total TAX1 Phone Delivery Sales",
 		  "i2TD": "Total TAX2 Phone Delivery Sales",
 		  "i3TD": "Total TAX3 Phone Delivery Sales",
 		  "otd": "Total Orders Phone Delivery Way",
 		  "s1VTR": " Total Surcharge 1 Phone Take Away Sales ",
 		  "s2VTR": " Total Surcharge 2 Phone Take Away Sales ",
 		  "vtr": "Phone Take Away Sales",
 		  "i1TR": "Total TAX1 Phone Take Away Sales",
 		  "i2TR": "Total TAX2 Phone Take Away Sales",
 		  "i3TR": "Total TAX3 Phone Take Away Sales",
 		  "otr": "Total Orders Phone Take-Away Way",
 		  "s1VCL": " Total Surcharge 1 Cash Till Restaurant Sales ",
 		  "s2VCL": " Total Surcharge 2 Cash Till Restaurant Sales ",
 		  "vcl": "Cash Till Restaurant Sales",
 		  "i1CL": "Total TAX1 Cash Till Restaurant Sales",
 		  "i2CL": "Total TAX2 Cash Till Restaurant Sales",
 		  "i3CL": "Total TAX3 Cash Till Restaurant Sales",
 		  "ocl": "Total Orders Cash Till Restaurant Way",
 		  "s1VCR": " Total Surcharge 1 Cash Till At Store Sales ",
 		  "s2VCR": " Total Surcharge 2 Cash Till At Store Sales ",
 		  "vcr": "Cash Till At Store Sales",
 		  "i1CR": "Total TAX1 Cash Till At Store Sales",
 		  "i2CR": "Total TAX2 Cash Till At Store Sales",
 		  "i3CR": "Total TAX3 Cash Till At Store Sales",
 		  "ocr": "Total Orders Cash Till At Store Way"
		 }
		]
Exit 		OK: 200.
Actions 	This service will support the use of APIs and the web.
````

## Permissions

### Get country permissions

This service obtain the permissions for the country

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountryPermissions
Description 	Get the permissions
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Parameters:
 		  “countryCode”: Code for the country
Exit 		OK: Code 200.
		String with the permissions.
Actions 	This service will support the use of APIs and the web.
````

### Get country shop permissions

This service obtain the permissions for the country and shop

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/sales/ getCountryShopPermissions
Description 	Get the permissions
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Parameters:
 		  “countryCode”: Code for the country
 		  “shopCode”: Shop code
Exit 		OK: Code 200.
		String with the permissions for the shop.
Actions 	This service will support the use of APIs and the web.
````

## Save Permissions

This service save the permissions for the country

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/sales/SavePermissionCountry
Description 	Save the permissions
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		{
 		  “countryCode”: Code for the country
 		  “shopCode”: Shop code
 		  “ShowDailySales”: True if there is permissions for the radio day
 		  “ShowWeeklySales”: True if there is permissions for the radio week
 		  “ShowMonthlySales”: True if there is permissions for the radio month.
		}
Exit 		OK: Code 200
Actions 	This service will support the use of APIs and the web.
````

## Remove Permissions

This service remomve the permissions for the country

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.uploader/v1/sales/ RemovePermissionsShops
Description 	Remove the permissions for the country or the shop
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Parameters:
		{
 		  “countryCode”: Code for the country
 		  “shopCode”: Shop code
		}
Exit 		OK: Code 200
Actions 	This service will support the use of APIs and the web.
````

## Process

### Get User Process.

It obtains all user processes. The status field indicates the state in which the process is located.
These states can be:

0 - New  
1 - Processing  
2 - Terminated  
3 – Error

A user can’t load more files while they have a process in Processing state.

````
ID 		GET
		https://api-aws.telepizza.com/bulksales.sales/v1/sales/getUserProcess
Description 	Get process
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		[
 		 {
 		  "userId": "string"
 		 }
		]
Exit 		OK: 200.
		Body: JSON with records that failed:
		[ { "processId": "int",
		"userId": "strins",
		"userName": "string",
		"status": "int",
		"initDate": "dateTime",
		"endDate": " dateTime ",
		"entryDate": " dateTime ",
		"data": "string",
		"resultProcess": [{
		"id": "int",
		"processId": "int",
		"result": "string" }],
		"totalRows": "int",
		"processedRows": "int",
		"lastRegTime": “dateTime”
		}]
Actions 	This service will support the use of APIs and the web.
````

### Get User Process Result

This method obtains the details of the processes. The detail will return a list with possible validation errors

````
ID 		GET
		https://api-aws.telepizza.com/bulksales.sales/v1/sales/getUserProcessResult
Description 	Get process
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		[
		 {
 		  "processId": "int"
 		 }
		]
Exit 		OK: 200.
		Body: JSON with records that failed:
		[{
		"id": "int",
		"processId": "int",
		"result": "string"
		}]
Actions 	This service will support the use of APIs and the web.
````

## Logs

### Log Sales

This method obtains the sales log, filtering by initDate, endDate or shopId.

````
ID 		GET
		https://api-aws.telepizza.com/bulksales.sales/v1/sales/LogSales/LogSales
Description 	Get Log Sales
Entry 		Parameters:
 		  initDate: Init date
 		  endDate: End date
 		  registerDate: Register Date
 		  countryId: Country Id
 		  shopId: Shop ID
Exit 		OK: 200.
		[{
		 LogId
		 DateSale
		 Date
		 CountryId
		 Shop
		 Sope
		 Enpe
		 InvoicedSale
		 TotalNet 
		 AmountTax1
		 AmountTax2
		 AmountTax3
		 Tax1
		 Tax2
		 Tax3
		 SurchargeTax1
		 SurchargeTax2
		 AmountSTax1
		 AmountSTax2
		 OrderNumber
		 UserId
		 UserName
		 Incorporated
		 Collected
		}]
Actions 	This service will support the use of APIs and the web.
````

### Log Estimated Sales

This method obtains the estimated sales log, filtering by initDate, endDate or shopId.

````
ID 		GET
		https://api-aws.telepizza.com/bulksales.sales/v1/sales/LogSales/LogSalesEstimated
Description 	Get Log Estimated Sales
Entry 		Parameters:
 		  initDate: Init date
 		  endDate: End date
 		  registerDate: Register Date
 		  shopId: Shop ID
 		  countryId: Country Id
Exit 		OK: 200.
		[{
		 LogId
		 DateSale
		 Date
		 CountryId
		 Shop
		 Sope
		 Enpe
		 InvoicedSale
		 TotalNet
		 AmountTax1
		 AmountTax2
		 AmountTax3
		 Tax1
		 Tax2
		 Tax3
		 SurchargeTax1
		 SurchargeTax2
		 AmountSTax1
		 AmountSTax2
		 OrderNumber 
		 UserId
		 UserName
		 Incorporated
		 Collected
		}]
Actions 	This service will support the use of APIs and the web.
````

## Expenses – Load CSV

Load expenses records from a CSV.

To process this type of file, the same calls are made as for the sales file:
* Get the type File.
* Upload File 

### Save Expenses

Save expenses record.

````
ID 		POST
		https://api-aws.telepizza.com/bulksales.expenses/v1/expenses/saveexpenses
Description 	Save the record
Entry 		Header:
 		  identifier: <User Id.>
 		  identifierName: <User Name>
 		  Authorization: Bearer <access_token>
 		  Content-Type: application/json
		Body:
		[
		{ “fecha”: “Expenses date”,
 		  “tienda”: “Expense shop”,
 		  “gasto”: “Expense type”,
 		  “importe”: “Expense amount”
 		 }
		]
Exit 		OK: 200.
		Body: JSON with records that failed:
		[ { “shop:” string,
 		    “dateSale”: string,
 		    “scope”: string,
 		    “scopeDes”: string,
 		    “enpe”: string,
 		    “enpeDes”: string,
 		    “result”: string,
 		    “dateExpense”: string,
 		    “codeExpense”: string,
 		    “amountExpense”: string,
 		    “dateBill”: string,
 		    “numberBill”: string,
 		    “amountBill”: string
		}]
Actions 	This service will support the use of APIs and the web.
````

### Log Expenses

This method obtains the expenses log, filtering by initDate, endDate or shopId.

````
ID 		GET
		https://api-aws.telepizza.com/bulksales.expenses/v1/expenses/LogExpenses/LogExpenses
Description 	Get Log Expenses
Entry 		Parameters:
 		  initDate: Init date
 		  endDate: End date
 		  shopId: Shop ID
Exit 		OK: 200.
		[{
 		  LogId
 		  CountryId
 		  Shop
 		  DateExpense
 		  Date
 		  Code
 		  Amount
 		  UserId
 		  UserName
 		  Incorporated
 		  Collected
		}]
Actions 	This service will support the use of APIs and the web.
````

# External Services Description

## Get Shops

Check that the store that comes in the csv file corresponds to valid store

````
ID 		GET: <IAM> https://api-tpgescom.telepizza.com/api/shops
Description 	Get the user shops
Entry 		Header:
 		  Authorization: Bearer <Access_token>
Exit 		OK: 200.
		Body:
		[{
 		  "country": [{
 			“code”: “string”,
 			“name”: “string”,
 			“bussinessArea”: [{
 				“code”: “string”,
 				“name”: “string”,
 				“operationArea: [{
 					“code”: “string”,
 					“name”: “string”,
 					“supervisor”: [{
 						“code”: “string”,
 						“name”: “string”,
 						“shop”: [{
 							“code”: “string”,
 							“name”: “string”
 							“societyCode”: “string”,
 							“societyname”: “string”
							“franchiseeCode”: “string”,
							“franchiseeName”: “string”
 						}]
 					}]
 				}]
 			}]
 		  }]
		}]
Actions 	Get shops in the IAM API with the token of the user.
````






