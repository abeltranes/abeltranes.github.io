---
layout: default
title: Generate WSO2 Acces Token
parent: Api Services Description
nav_order: 1
---

# Generate WSO2 Acces Token

In order to invoke the BulkSales API published in WSO2, it is necessary to previously generate an access token.

The following cURL command shows how to generate an WSO2 access token using the Client Credentials grant type:

```yaml
curl -k -d "grant_type=client_credentials" \
			-H "Authorization: Basic Base64(consumer-key:consumer-secret)" \
```

<a href="https://api-aws.telepizza.com/token" style="margin-bottom: 30px; color: blue;">https://api-aws.telepizza.com/token</a>
<br>
<br>

| **ID** | GET https://api-aws.telepizza.com/token       |
| **Description** | Generate Acces Token       |
| **Entry**| **Header**: Authorization: Basic <token> Content-Type: application/x-www-form-urlencoded  Body grant_type: client_credentials |
| | **Body** grant_type: client_credentials |
| **Exit**  | **OK**: Code 200 String with the fyle type       |
| **Actions** | This service generate an WSO2 access token |

