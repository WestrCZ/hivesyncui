# ProjectApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiProjectProjectGet**](ProjectApi.md#apiprojectprojectget) | **GET** /api/Project/Project |  |
| [**apiProjectProjectIdDelete**](ProjectApi.md#apiprojectprojectiddelete) | **DELETE** /api/Project/Project/{id} |  |
| [**apiProjectProjectIdGet**](ProjectApi.md#apiprojectprojectidget) | **GET** /api/Project/Project/{id} |  |
| [**apiProjectProjectIdPatch**](ProjectApi.md#apiprojectprojectidpatch) | **PATCH** /api/Project/Project/{id} |  |
| [**apiProjectProjectPost**](ProjectApi.md#apiprojectprojectpost) | **POST** /api/Project/Project |  |



## apiProjectProjectGet

> Array&lt;ProjectDetailDto&gt; apiProjectProjectGet()



### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { ApiProjectProjectGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  try {
    const data = await api.apiProjectProjectGet();
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

[**Array&lt;ProjectDetailDto&gt;**](ProjectDetailDto.md)

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


## apiProjectProjectIdDelete

> apiProjectProjectIdDelete(id)



### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { ApiProjectProjectIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiProjectProjectIdDeleteRequest;

  try {
    const data = await api.apiProjectProjectIdDelete(body);
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


## apiProjectProjectIdGet

> ProjectDetailDto apiProjectProjectIdGet(id)



### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { ApiProjectProjectIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiProjectProjectIdGetRequest;

  try {
    const data = await api.apiProjectProjectIdGet(body);
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

[**ProjectDetailDto**](ProjectDetailDto.md)

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


## apiProjectProjectIdPatch

> ProjectDetailDto apiProjectProjectIdPatch(id, updateProjectDto)



### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { ApiProjectProjectIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateProjectDto (optional)
    updateProjectDto: ...,
  } satisfies ApiProjectProjectIdPatchRequest;

  try {
    const data = await api.apiProjectProjectIdPatch(body);
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
| **updateProjectDto** | [UpdateProjectDto](UpdateProjectDto.md) |  | [Optional] |

### Return type

[**ProjectDetailDto**](ProjectDetailDto.md)

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


## apiProjectProjectPost

> ProjectDetailDto apiProjectProjectPost(addProjectDto)



### Example

```ts
import {
  Configuration,
  ProjectApi,
} from '';
import type { ApiProjectProjectPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProjectApi(config);

  const body = {
    // AddProjectDto (optional)
    addProjectDto: ...,
  } satisfies ApiProjectProjectPostRequest;

  try {
    const data = await api.apiProjectProjectPost(body);
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
| **addProjectDto** | [AddProjectDto](AddProjectDto.md) |  | [Optional] |

### Return type

[**ProjectDetailDto**](ProjectDetailDto.md)

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

