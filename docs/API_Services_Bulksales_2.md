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
   | 	Authorization: Basic <token>
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
   | 	identifier: <User Id.> 
   | 	identifierName: <User Name> 
   | 	Authorization: Bearer <access_token>
   | 	Content-Type: application/json   
   | **Body**
   | { 	  
   | 	“File”: <csv_file_base64>
   | }
`` Exit `` | **OK**: Code 200.
   | String with the fyle type
`` Actions `` | This service will support the use of APIs and the web.   













