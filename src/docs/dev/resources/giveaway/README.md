---
sidebarDepth: 1
---

<Endpoint>

# Giveaway

</Endpoint>



<Endpoint>

## Get Giveaways

<ApiUrl type="get" version="1" endpoint="/users/{user_id}/giveaways" />

Gets the list of giveaways that the user owns.

### Authentication

Requires an user access token that includes the `bot:giveaways` or `bot:giveaways:read` scope.

### Parameters

### Response Body

<EndpointResponseBody :fields="[
{ name: 'id', type: 'number', description: 'ID of the giveaway' },
{ name: 'type', type: 'string', description: 'Type of the giveaway. Possible values: keyword, active or number' },
{ name: 'name', type: 'string', description: 'Name of the giveaway.' },
{ name: 'eligibility', type: 'number', description: 'Permission level for users there are eligibility to enter the giveaway.' },
{ name: 'enabled', type: 'boolean', description: 'Active status of the giveaway.' },
{ name: 'users', type: 'object[]', description: 'Entered users of the giveaway.', fields: [
{ name: 'platform', type: 'string', description: 'Platform name of the participant.' },
{ name: 'platform_id', type: 'string', description: 'Platform ID of the participant.' },
{ name: 'username', type: 'string', description: 'Username of the participant.' },
{ name: 'eligibility', type: 'number', description: 'Permission level of the participant.' },
{ name: 'enabled', type: 'boolean', description: 'Status of the participant (enabled = can win, disabled = can\'t win.' },
] },
{ name: 'created_at', type: 'datetime', description: 'Creation date of the giveaway.' },
]" has-pagination />

### HTTP Response Status Codes

<HttpResponseCodes :any-scope="['bot:giveaways', 'bot:giveaways:read']" />

<EndpointExample>

### Code samples

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



<Endpoint>

## Get Giveaway

<ApiUrl type="get" version="1" endpoint="/giveaways/{giveaway_id}" />

Get a giveaway by ID.

### Authentication

Requires an app access token that includes the `bot:giveaways` or `bot:giveaways:read` scope.

### Parameters

### Response Body

<EndpointResponseBody :fields="[
{ name: 'id', type: 'number', description: 'ID of the giveaway' },
{ name: 'type', type: 'string', description: 'Type of the giveaway. Possible values: keyword, active or number' },
{ name: 'name', type: 'string', description: 'Name of the giveaway.' },
{ name: 'eligibility', type: 'number', description: 'Permission level for users there are eligibility to enter the giveaway.' },
{ name: 'enabled', type: 'boolean', description: 'Active status of the giveaway.' },
{ name: 'users', type: 'object[]', description: 'Entered users of the giveaway.', fields: [
{ name: 'platform', type: 'string', description: 'Platform name of the participant.' },
{ name: 'platform_id', type: 'string', description: 'Platform ID of the participant.' },
{ name: 'username', type: 'string', description: 'Username of the participant.' },
{ name: 'eligibility', type: 'number', description: 'Permission level of the participant.' },
{ name: 'enabled', type: 'boolean', description: 'Status of the participant (enabled = can win, disabled = can\'t win.' },
] },
{ name: 'created_at', type: 'datetime', description: 'Creation date of the giveaway.' },
]" has-pagination />

### HTTP Response Status Codes

<HttpResponseCodes :any-scope="['bot:giveaways', 'bot:giveaways:read']" />

<EndpointExample>

### Code samples

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



<Endpoint>

## Create Giveaway

<ApiUrl type="post" version="1" endpoint="/users/{user_id}/giveaways" />

### Authentication

Requires an user access token that includes the `bot:giveaways` scope.

### HTTP Response Status Codes

<HttpResponseCodes :require-scope="['bot:giveaways']" />

<EndpointExample>
hier mein code example
</EndpointExample>
</Endpoint>



<Endpoint>

## Update Giveaway

<ApiUrl type="patch" version="1" endpoint="/giveaways/{giveaway_id}" />

### Authentication

Requires an app or user access token that includes the `bot:giveaways` scope.

### HTTP Response Status Codes

<HttpResponseCodes :require-scope="['bot:giveaways']" />

<EndpointExample>
hier mein code example
</EndpointExample>
</Endpoint>



<Endpoint>

## Delete Giveaway

<ApiUrl type="delete" version="1" endpoint="/giveaways/{giveaway_id}" />

### Authentication

Requires an app or user access token that includes the `bot:giveaways` scope.

### HTTP Response Status Codes

<HttpResponseCodes :require-scope="['bot:giveaways']" />

<EndpointExample>
hier mein code example
</EndpointExample>
</Endpoint>