# TodoApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiTodoTodoGet**](TodoApi.md#apitodotodoget) | **GET** /api/Todo/Todo |  |
| [**apiTodoTodoIdDelete**](TodoApi.md#apitodotodoiddelete) | **DELETE** /api/Todo/Todo/{id} |  |
| [**apiTodoTodoIdGet**](TodoApi.md#apitodotodoidget) | **GET** /api/Todo/Todo/{id} |  |
| [**apiTodoTodoIdPatch**](TodoApi.md#apitodotodoidpatch) | **PATCH** /api/Todo/Todo/{id} |  |
| [**apiTodoTodoPost**](TodoApi.md#apitodotodopost) | **POST** /api/Todo/Todo |  |



## apiTodoTodoGet

> Array&lt;TodoDetailDto&gt; apiTodoTodoGet()



### Example

```ts
import {
  Configuration,
  TodoApi,
} from '';
import type { ApiTodoTodoGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TodoApi(config);

  try {
    const data = await api.apiTodoTodoGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;TodoDetailDto&gt;**](TodoDetailDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiTodoTodoIdDelete

> apiTodoTodoIdDelete(id)



### Example

```ts
import {
  Configuration,
  TodoApi,
} from '';
import type { ApiTodoTodoIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TodoApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiTodoTodoIdDeleteRequest;

  try {
    const data = await api.apiTodoTodoIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiTodoTodoIdGet

> TodoDetailDto apiTodoTodoIdGet(id)



### Example

```ts
import {
  Configuration,
  TodoApi,
} from '';
import type { ApiTodoTodoIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TodoApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiTodoTodoIdGetRequest;

  try {
    const data = await api.apiTodoTodoIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**TodoDetailDto**](TodoDetailDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiTodoTodoIdPatch

> TodoDetailDto apiTodoTodoIdPatch(id, updateTodoDto)



### Example

```ts
import {
  Configuration,
  TodoApi,
} from '';
import type { ApiTodoTodoIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TodoApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateTodoDto (optional)
    updateTodoDto: ...,
  } satisfies ApiTodoTodoIdPatchRequest;

  try {
    const data = await api.apiTodoTodoIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateTodoDto** | [UpdateTodoDto](UpdateTodoDto.md) |  | [Optional] |

### Return type

[**TodoDetailDto**](TodoDetailDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiTodoTodoPost

> TodoDetailDto apiTodoTodoPost(addTodoDto)



### Example

```ts
import {
  Configuration,
  TodoApi,
} from '';
import type { ApiTodoTodoPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new TodoApi(config);

  const body = {
    // AddTodoDto (optional)
    addTodoDto: ...,
  } satisfies ApiTodoTodoPostRequest;

  try {
    const data = await api.apiTodoTodoPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addTodoDto** | [AddTodoDto](AddTodoDto.md) |  | [Optional] |

### Return type

[**TodoDetailDto**](TodoDetailDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

