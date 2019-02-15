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

	curl -k -d "grant_type=client_credentials" \      

					-H "Authorization: Basic Base64(consumer-key:consumer-secret)" \ 

[https://api-aws.telepizza.com/token](https://api-aws.telepizza.com/token)

`` ID `` | GET  
   | [https://api-aws.telepizza.com/token](https://api-aws.telepizza.com/token)
`` Description `` | Generate Access Token
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;Authorization: Basic \<token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/x-www-form-urlencoded  
   | **Body**
   | &nbsp;&nbsp;&nbsp;grant_type: client_credentials
`` Exit `` | **OK**: Code 200.
   | String with the fyle type
`` Actions `` | This service generate an WSO2 access token. 

## Sales – Load CSV 

Load sales records from a csv. 

### Get the file type: 
  
   This service is used to obtain the type of file loaded.
  
`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/uploader/fileType](https://api-aws.telepizza.com/bulksales.uploader/v1/uploader/fileType)
`` Description `` | Get the type fily: Sales-Expenses 
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json 
   | **Body**
   | { 	  
   | &nbsp;&nbsp;&nbsp;“File”: \<csv_file_base64>
   | }
`` Exit `` | **OK**: Code 200.
   | String with the fyle type
`` Actions `` | This service will support the use of APIs and the web.   
  
### Upload File Service:

Load the csv file to read the records. 

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/uploader/fileUpload](https://api-aws.telepizza.com/bulksales.uploader/v1/uploader/fileUpload)
`` Description `` | Load the csv file to read the records. 
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json  
   | **Body**
   | { 	  
   | 	“File”: \<csv_file_base64>
   | }
`` Exit `` | **OK**: Code 200.
   | Body: JSON with records that failed: 
   | \[{ “shop:” string, 
   | &nbsp;&nbsp;&nbsp;“dateSale”: string,
   | &nbsp;&nbsp;&nbsp;“scope”: string, 
   | &nbsp;&nbsp;&nbsp;“scopeDes”: string,
   | &nbsp;&nbsp;&nbsp;“enpe”: string, 
   | &nbsp;&nbsp;&nbsp;“enpeDes”: string, 
   | &nbsp;&nbsp;&nbsp;“result”: string,
   | &nbsp;&nbsp;&nbsp;“dateExpense”: string,
   | &nbsp;&nbsp;&nbsp;“codeExpense”: string,   
   | &nbsp;&nbsp;&nbsp;“amountExpense”: string, 
   | &nbsp;&nbsp;&nbsp;“dateBill”: string,
   | &nbsp;&nbsp;&nbsp;“numberBill”: string, 
   | &nbsp;&nbsp;&nbsp;“amountBill”: string 
   | \}]  
`` Actions `` | This service will support the use of APIs and the web.

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

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCurrency](https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCurrency)
`` Description `` | Get the currency
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json   
   | **Parameters:**
   | &nbsp;&nbsp;&nbsp;“countryCode”: Code for the country 	  
`` Exit `` | **OK**: Code 200.
   | String with the currency code.
`` Actions `` | This service will support the use of APIs and the web.   

### Get countries

This service obtain the countries.

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountries](https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountries)
`` Description `` | Get the list of countries
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json     
`` Exit `` | **OK**: Code 200.
   | String with the list of countries
`` Actions `` | This service will support the use of APIs and the web. 

### Saves Sales

Save sales record.

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesales](https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesales)
`` Description `` | Save the record
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json     
   | 	**Body**:
   | \[
   | &nbsp;{
   | &nbsp;&nbsp;&nbsp;"date": "Store Number assigned by Telepizza SAU, with 5 digits", 
   | &nbsp;&nbsp;&nbsp;"shop": "Sales date",
   | &nbsp;&nbsp;&nbsp;"tax1": "type 1 of tax used on Telepizza",
   | &nbsp;&nbsp;&nbsp;"tax2": "type 2 of tax used on Telepizza",
   | &nbsp;&nbsp;&nbsp;"tax3": "type 3 of tax used on Telepizza",
   | &nbsp;&nbsp;&nbsp;"surchargeTax1": "Surcharge Tax 1",
   | &nbsp;&nbsp;&nbsp;"surchargeTax2": "Surcharge Tax 2",
   | &nbsp;&nbsp;&nbsp;"s1VID": "Total Surcharge 1 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"s2VID": "Total Surcharge 2 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"vid": "Online Delivery Sales", 
   | &nbsp;&nbsp;&nbsp;"i1ID": "Total TAX1 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i2ID": "Total TAX2 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i3ID": "Total TAX3 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"oid": "Total Orders Online Delivery Way",
   | &nbsp;&nbsp;&nbsp;"s1VIR": " Total Surcharge 1 Online Take Away Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VIR": " Total Surcharge 2 Online Take Away Sales ",
   | &nbsp;&nbsp;&nbsp;"vir": "Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i1IR": "Total TAX1 Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i2IR": "Total TAX2 Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i3IR": "Total TAX3 Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"oir": "Total Orders Online Take-Away Way",
   | &nbsp;&nbsp;&nbsp;"s1VTD": " Total Surcharge 1 Phone Delivery Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VTD": " Total Surcharge 2 Phone Delivery Sales ",
   | &nbsp;&nbsp;&nbsp;"vtd": "Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i1TD": "Total TAX1 Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i2TD": "Total TAX2 Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i3TD": "Total TAX3 Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"otd": "Total Orders Phone Delivery Way",
   | &nbsp;&nbsp;&nbsp;"s1VTR": " Total Surcharge 1 Phone Take Away Sales ",   
   | &nbsp;&nbsp;&nbsp;"s2VTR": " Total Surcharge 2 Phone Take Away Sales ",
   | &nbsp;&nbsp;&nbsp;"vtr": "Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i1TR": "Total TAX1 Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i2TR": "Total TAX2 Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i3TR": "Total TAX3 Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"otr": "Total Orders Phone Take-Away Way",
   | &nbsp;&nbsp;&nbsp;"s1VCL": " Total Surcharge 1 Cash Till Restaurant Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VCL": " Total Surcharge 2 Cash Till Restaurant Sales ",
   | &nbsp;&nbsp;&nbsp;"vcl": "Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"i1CL": "Total TAX1 Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"i2CL": "Total TAX2 Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"i3CL": "Total TAX3 Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"ocl": "Total Orders Cash Till Restaurant Way",
   | &nbsp;&nbsp;&nbsp;"s1VCR": " Total Surcharge 1 Cash Till At Store Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VCR": " Total Surcharge 2 Cash Till At Store Sales ", 
   | &nbsp;&nbsp;&nbsp;"vcr": "Cash Till At Store Sales", 
   | &nbsp;&nbsp;&nbsp;"i1CR": "Total TAX1 Cash Till At Store Sales",
   | &nbsp;&nbsp;&nbsp;"i2CR": "Total TAX2 Cash Till At Store Sales",
   | &nbsp;&nbsp;&nbsp;"i3CR": "Total TAX3 Cash Till At Store Sales",
   | &nbsp;&nbsp;&nbsp;"ocr": "Total Orders Cash Till At Store Way"
   | }  
   | ] 
`` Exit `` | **OK**: Code 200.
   | Body: JSON with records that failed:
   | \[{ “shop:” string, 
   | &nbsp;&nbsp;&nbsp;“dateSale”: string,
   | &nbsp;&nbsp;&nbsp;“scope”: string,
   | &nbsp;&nbsp;&nbsp;“scopeDes”: string,
   | &nbsp;&nbsp;&nbsp;“enpe”: string,
   | &nbsp;&nbsp;&nbsp;“enpeDes”: string, 
   | &nbsp;&nbsp;&nbsp;“result”: string,
   | &nbsp;&nbsp;&nbsp;“dateExpense”: string, 
   | &nbsp;&nbsp;&nbsp;“codeExpense”: string,
   | &nbsp;&nbsp;&nbsp;“amountExpense”: string,   
   | &nbsp;&nbsp;&nbsp;“dateBill”: string,
   | &nbsp;&nbsp;&nbsp;“numberBill”: string,
   | &nbsp;&nbsp;&nbsp;“amountBill”: string
   | \}]
`` Actions `` | This service will support the use of APIs and the web. 

### Save Sales Background

To load large files you can use the **savesalesback** service that saves the record in the background.
Later you can check the status of the process from the **getUserProcessResult** and **GetUserProcess**
services.

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesalesback](https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesalesback)
`` Description `` | Save the record in background
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json    
   | 	**Body**:
   | \[
   | &nbsp;{
   | &nbsp;&nbsp;&nbsp;"date": "Store Number assigned by Telepizza SAU, with 5 digits", 
   | &nbsp;&nbsp;&nbsp;"shop": "Sales date",
   | &nbsp;&nbsp;&nbsp;"tax1": "type 1 of tax used on Telepizza",
   | &nbsp;&nbsp;&nbsp;"tax2": "type 2 of tax used on Telepizza",
   | &nbsp;&nbsp;&nbsp;"tax3": "type 3 of tax used on Telepizza",
   | &nbsp;&nbsp;&nbsp;"surchargeTax1": "Surcharge Tax 1",
   | &nbsp;&nbsp;&nbsp;"surchargeTax2": "Surcharge Tax 2",
   | &nbsp;&nbsp;&nbsp;"s1VID": "Total Surcharge 1 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"s2VID": "Total Surcharge 2 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"vid": "Online Delivery Sales", 
   | &nbsp;&nbsp;&nbsp;"i1ID": "Total TAX1 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i2ID": "Total TAX2 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i3ID": "Total TAX3 Online Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"oid": "Total Orders Online Delivery Way",
   | &nbsp;&nbsp;&nbsp;"s1VIR": " Total Surcharge 1 Online Take Away Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VIR": " Total Surcharge 2 Online Take Away Sales ",
   | &nbsp;&nbsp;&nbsp;"vir": "Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i1IR": "Total TAX1 Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i2IR": "Total TAX2 Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i3IR": "Total TAX3 Online Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"oir": "Total Orders Online Take-Away Way",
   | &nbsp;&nbsp;&nbsp;"s1VTD": " Total Surcharge 1 Phone Delivery Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VTD": " Total Surcharge 2 Phone Delivery Sales ",
   | &nbsp;&nbsp;&nbsp;"vtd": "Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i1TD": "Total TAX1 Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i2TD": "Total TAX2 Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"i3TD": "Total TAX3 Phone Delivery Sales",
   | &nbsp;&nbsp;&nbsp;"otd": "Total Orders Phone Delivery Way",
   | &nbsp;&nbsp;&nbsp;"s1VTR": " Total Surcharge 1 Phone Take Away Sales ",   
   | &nbsp;&nbsp;&nbsp;"s2VTR": " Total Surcharge 2 Phone Take Away Sales ",
   | &nbsp;&nbsp;&nbsp;"vtr": "Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i1TR": "Total TAX1 Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i2TR": "Total TAX2 Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"i3TR": "Total TAX3 Phone Take Away Sales",
   | &nbsp;&nbsp;&nbsp;"otr": "Total Orders Phone Take-Away Way",
   | &nbsp;&nbsp;&nbsp;"s1VCL": " Total Surcharge 1 Cash Till Restaurant Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VCL": " Total Surcharge 2 Cash Till Restaurant Sales ",
   | &nbsp;&nbsp;&nbsp;"vcl": "Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"i1CL": "Total TAX1 Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"i2CL": "Total TAX2 Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"i3CL": "Total TAX3 Cash Till Restaurant Sales",
   | &nbsp;&nbsp;&nbsp;"ocl": "Total Orders Cash Till Restaurant Way",
   | &nbsp;&nbsp;&nbsp;"s1VCR": " Total Surcharge 1 Cash Till At Store Sales ",
   | &nbsp;&nbsp;&nbsp;"s2VCR": " Total Surcharge 2 Cash Till At Store Sales ", 
   | &nbsp;&nbsp;&nbsp;"vcr": "Cash Till At Store Sales", 
   | &nbsp;&nbsp;&nbsp;"i1CR": "Total TAX1 Cash Till At Store Sales",
   | &nbsp;&nbsp;&nbsp;"i2CR": "Total TAX2 Cash Till At Store Sales",
   | &nbsp;&nbsp;&nbsp;"i3CR": "Total TAX3 Cash Till At Store Sales",
   | &nbsp;&nbsp;&nbsp;"ocr": "Total Orders Cash Till At Store Way"
   | &nbsp;}  
   | ]    
`` Exit `` | **OK**: Code 200.
`` Actions `` | This service will support the use of APIs and the web. 

## Permissions

### Get country permissions

This service obtain the permissions for the country

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountryPermissions](https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountryPermissions)
`` Description `` | Get the permissions
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json  
   | **Parameters:**
   | &nbsp;&nbsp;&nbsp;“countryCode”: Code for the country 	  
`` Exit `` | **OK**: Code 200.
   | String with the currency code.
`` Actions `` | This service will support the use of APIs and the web.  

### Get country shop permissions

This service obtain the permissions for the country and shop

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/sales/ getCountryShopPermissions](https://api-aws.telepizza.com/bulksales.uploader/v1/sales/ getCountryShopPermissions)
`` Description `` | Get the permissions
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json 
   | **Parameters:**
   | &nbsp;&nbsp;&nbsp;“countryCode”: Code for the country 
   | &nbsp;&nbsp;&nbsp;“shopCode”: Shop code
`` Exit `` | **OK**: Code 200.
   | String with the permissions for the shop.
`` Actions `` | This service will support the use of APIs and the web.  

## Save Permissions

This service save the permissions for the country

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/sales/SavePermissionCountry](https://api-aws.telepizza.com/bulksales.uploader/v1/sales/SavePermissionCountry)
`` Description `` | Save the permissions
`` Entry `` | **Header**:  
   | &nbsp;&nbsp;&nbsp;identifier: \<User Id.> 
   | &nbsp;&nbsp;&nbsp;identifierName: \<User Name> 
   | &nbsp;&nbsp;&nbsp;Authorization: Bearer \<access_token>
   | &nbsp;&nbsp;&nbsp;Content-Type: application/json   
   | **Body:**
   | {   
   | &nbsp;&nbsp;&nbsp;“countryCode”: Code for the country 
   | &nbsp;&nbsp;&nbsp;“shopCode”: Shop code
   | &nbsp;&nbsp;&nbsp;“ShowDailySales”: True if there is permissions for the radio day
   | &nbsp;&nbsp;&nbsp;“ShowWeeklySales”: True if there is permissions for the radio week
   | &nbsp;&nbsp;&nbsp;“ShowMonthlySales”: True if there is permissions for the radio month.
   | }
`` Exit `` | **OK**: Code 200.
`` Actions `` | This service will support the use of APIs and the web.  











