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
   |

## References

References |   | Description
:--: | :--: | :--:
   |   |   
   
# API Services Description

The BulkSales APIs allow to load Sales and Expenses in two different ways: 
-Massive load. 
-Manual load. 

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

- Checking Store field: Check that the store that comes in the csv file corresponds to valid store. Service defined in point 4.1.1

- Checking the fields Tax1, Tax2, Tax3, SurchargeTax1 and SurchargeTax2: Check that the types of Taxes entered in these fields correspond to the correct taxes for the country indicated. Service defined in point 4.1.2 

Check the quantities entered:

- Check that the values entered are not null or empty.

- For each of the channels and areas we carry out the following operations:

	-  Check that the order number is greater than 0. 
	- Calculate the total amounts: 


	If taxes are greather than 0:
    
    Total1 = ((amount1 * 100) / tax1) + amount
    
    Total2 = ((amount2 * 100) / tax2) + amount2 
    
    Total3 = ((amount3 * 100) / tax3) + amount3























