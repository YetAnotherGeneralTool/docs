---
sidebarDepth: 1
---

<Endpoint>

# User

</Endpoint>

<Endpoint>

## Get User

<ApiUrl type="get" url="" endpoint="/users/@me" />

`test`

Gets a list of giveaways by one user.

You may look up users using their user ID, login name.

If you don’t specify IDs or login names, the request returns information about the user in the access token if you specify a user access token.

To include the user’s verified email address in the response, you must use a user access token that includes the `user:read:email` scope.

### Authentication

Requires an app access token or user access token.

### Required Query Parameters

| Parameter | Type   | Required | Description                                                                                                                                                                               |
|-----------|--------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id        | String | No       | The ID of the user to get. To specify more than one user, include the id parameter for each user to get. For example, id=1234&id=5678. The maximum number of IDs you may specify is 100.  |
| login     | String | No       | The login name of the user to get. To specify more than one user, include the login parameter for each user to get. For example, login=foo&login=bar. The maximum number of login names you may specify is 100.  |

<EndpointExample>

```js
module.exports = {
	this: {
		is: {
			my: {
				super: {
					secret: 'code',
				}
			}
		}
	}
};
```

</EndpointExample>

</Endpoint>