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
   | 	Authorization: Basic \<token>
   | 	Content-Type: application/x-www-form-urlencoded  
   | **Body**
   | 	grant_type: client_credentials
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
   | 	identifier: \<User Id.> 
   | 	identifierName: \<User Name> 
   | 	Authorization: Bearer \<access_token>
   | 	Content-Type: application/json   
   | **Body**
   | { 	  
   | 	“File”: \<csv_file_base64>
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
   | 	identifier: \<User Id.> 
   | 	identifierName: \<User Name> 
   | 	Authorization: Bearer \<access_token>
   | 	Content-Type: application/json   
   | **Body**
   | { 	  
   | 	“File”: \<csv_file_base64>
   | }
`` Exit `` | **OK**: Code 200.
   | Body: JSON with records that failed: 
   | \[ { “shop:” string, 
   | “dateSale”: string,
   | “scope”: string, 
   | “scopeDes”: string,
   | “enpe”: string, 
   | “enpeDes”: string, 
   | “result”: string,
   | “dateExpense”: string,
   | “codeExpense”: string,   
   | “amountExpense”: string, 
   | “dateBill”: string,
   | “numberBill”: string, 
   | “amountBill”: string 
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
   | 	identifier: \<User Id.> 
   | 	identifierName: \<User Name> 
   | 	Authorization: Bearer \<access_token>
   | 	Content-Type: application/json   
   | **Parameters:**
   | “countryCode”: Code for the country 	  
`` Exit `` | **OK**: Code 200.
   | String with the currency code.
`` Actions `` | This service will support the use of APIs and the web.   

### Get countries

This service obtain the countries.

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountries](https://api-aws.telepizza.com/bulksales.uploader/v1/sales/getCountries)
`` Description `` | Get the list of countries
`` Entry `` | **Header**:  
   | 	identifier: \<User Id.> 
   | 	identifierName: \<User Name> 
   | 	Authorization: Bearer \<access_token>
   | 	Content-Type: application/json   
`` Exit `` | **OK**: Code 200.
   | String with the list of countries
`` Actions `` | This service will support the use of APIs and the web. 

### Saves Sales

Save sales record.

`` ID `` | POST  
   | [https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesales](https://api-aws.telepizza.com/bulksales.sales/v1/sales/savesales)
`` Description `` | Save the record
`` Entry `` | **Header**:  
   | 	identifier: \<User Id.> 
   | 	identifierName: \<User Name> 
   | 	Authorization: Bearer \<access_token>
   | 	Content-Type: application/json   
   | 	**Body**:
   | \[
   |  {
   | "date": "Store Number assigned by Telepizza SAU, with 5 digits", 
   | "shop": "Sales date",
   | "tax1": "type 1 of tax used on Telepizza",
   | "tax2": "type 2 of tax used on Telepizza",
   | "tax3": "type 3 of tax used on Telepizza",
   | "surchargeTax1": "Surcharge Tax 1",
   | "surchargeTax2": "Surcharge Tax 2",
   | "s1VID": "Total Surcharge 1 Online Delivery Sales",
   | "s2VID": "Total Surcharge 2 Online Delivery Sales",
   | "vid": "Online Delivery Sales", 
   | "i1ID": "Total TAX1 Online Delivery Sales",
   | "i2ID": "Total TAX2 Online Delivery Sales",
   | "i3ID": "Total TAX3 Online Delivery Sales",
   | "oid": "Total Orders Online Delivery Way",
   | "s1VIR": " Total Surcharge 1 Online Take Away Sales ",
   | "s2VIR": " Total Surcharge 2 Online Take Away Sales ",
   | "vir": "Online Take Away Sales",
   | "i1IR": "Total TAX1 Online Take Away Sales",
   | "i2IR": "Total TAX2 Online Take Away Sales",
   | "i3IR": "Total TAX3 Online Take Away Sales",
   | "oir": "Total Orders Online Take-Away Way",
   | "s1VTD": " Total Surcharge 1 Phone Delivery Sales ",
   | "s2VTD": " Total Surcharge 2 Phone Delivery Sales ",
   | "vtd": "Phone Delivery Sales",
   | "i1TD": "Total TAX1 Phone Delivery Sales",
   | "i2TD": "Total TAX2 Phone Delivery Sales",
   | "i3TD": "Total TAX3 Phone Delivery Sales",
   | "otd": "Total Orders Phone Delivery Way",
   | "s1VTR": " Total Surcharge 1 Phone Take Away Sales ",   
   | "s2VTR": " Total Surcharge 2 Phone Take Away Sales ",
   | "vtr": "Phone Take Away Sales",
   | "i1TR": "Total TAX1 Phone Take Away Sales",
   | "i2TR": "Total TAX2 Phone Take Away Sales",
   | "i3TR": "Total TAX3 Phone Take Away Sales",
   | "otr": "Total Orders Phone Take-Away Way",
   | "s1VCL": " Total Surcharge 1 Cash Till Restaurant Sales ",
   | "s2VCL": " Total Surcharge 2 Cash Till Restaurant Sales ",
   | "vcl": "Cash Till Restaurant Sales",
   | "i1CL": "Total TAX1 Cash Till Restaurant Sales",
   | "i2CL": "Total TAX2 Cash Till Restaurant Sales",
   | "i3CL": "Total TAX3 Cash Till Restaurant Sales",
   | "ocl": "Total Orders Cash Till Restaurant Way",
   | "s1VCR": " Total Surcharge 1 Cash Till At Store Sales ",
   | "s2VCR": " Total Surcharge 2 Cash Till At Store Sales ", 
   | "vcr": "Cash Till At Store Sales", 
   | "i1CR": "Total TAX1 Cash Till At Store Sales",
   | "i2CR": "Total TAX2 Cash Till At Store Sales",
   | "i3CR": "Total TAX3 Cash Till At Store Sales",
   | "ocr": "Total Orders Cash Till At Store Way"
   | }  
   | ] 
`` Exit `` | **OK**: Code 200.
   | Body: JSON with records that failed:
   | \[ { “shop:” string, 
   | “dateSale”: string,
   | “scope”: string,
   | “scopeDes”: string,
   | “enpe”: string,
   | “enpeDes”: string, 
   | “result”: string,
   | “dateExpense”: string, 
   | “codeExpense”: string,
   | “amountExpense”: string,   
   | “dateBill”: string,
   | “numberBill”: string,
   | “amountBill”: string
   | \}]
`` Actions `` | This service will support the use of APIs and the web. 

### Save Sales Background

To load large files you can use the **savesalesback** service that saves the record in the background.
Later you can check the status of the process from the **getUserProcessResult** and **GetUserProcess**
services.




















