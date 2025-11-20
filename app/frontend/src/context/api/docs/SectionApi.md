# SectionApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiSectionSectionGet**](SectionApi.md#apisectionsectionget) | **GET** /api/Section/Section |  |
| [**apiSectionSectionIdDelete**](SectionApi.md#apisectionsectioniddelete) | **DELETE** /api/Section/Section/{id} |  |
| [**apiSectionSectionIdGet**](SectionApi.md#apisectionsectionidget) | **GET** /api/Section/Section/{id} |  |
| [**apiSectionSectionIdPatch**](SectionApi.md#apisectionsectionidpatch) | **PATCH** /api/Section/Section/{id} |  |
| [**apiSectionSectionPost**](SectionApi.md#apisectionsectionpost) | **POST** /api/Section/Section |  |



## apiSectionSectionGet

> Array&lt;SectionDetailDto&gt; apiSectionSectionGet()



### Example

```ts
import {
  Configuration,
  SectionApi,
} from '';
import type { ApiSectionSectionGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionApi(config);

  try {
    const data = await api.apiSectionSectionGet();
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

[**Array&lt;SectionDetailDto&gt;**](SectionDetailDto.md)

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


## apiSectionSectionIdDelete

> apiSectionSectionIdDelete(id)



### Example

```ts
import {
  Configuration,
  SectionApi,
} from '';
import type { ApiSectionSectionIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiSectionSectionIdDeleteRequest;

  try {
    const data = await api.apiSectionSectionIdDelete(body);
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


## apiSectionSectionIdGet

> SectionDetailDto apiSectionSectionIdGet(id)



### Example

```ts
import {
  Configuration,
  SectionApi,
} from '';
import type { ApiSectionSectionIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiSectionSectionIdGetRequest;

  try {
    const data = await api.apiSectionSectionIdGet(body);
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

[**SectionDetailDto**](SectionDetailDto.md)

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


## apiSectionSectionIdPatch

> SectionDetailDto apiSectionSectionIdPatch(id, updateSectionDto)



### Example

```ts
import {
  Configuration,
  SectionApi,
} from '';
import type { ApiSectionSectionIdPatchRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateSectionDto (optional)
    updateSectionDto: ...,
  } satisfies ApiSectionSectionIdPatchRequest;

  try {
    const data = await api.apiSectionSectionIdPatch(body);
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
| **updateSectionDto** | [UpdateSectionDto](UpdateSectionDto.md) |  | [Optional] |

### Return type

[**SectionDetailDto**](SectionDetailDto.md)

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


## apiSectionSectionPost

> SectionDetailDto apiSectionSectionPost(addSectionDto)



### Example

```ts
import {
  Configuration,
  SectionApi,
} from '';
import type { ApiSectionSectionPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SectionApi(config);

  const body = {
    // AddSectionDto (optional)
    addSectionDto: ...,
  } satisfies ApiSectionSectionPostRequest;

  try {
    const data = await api.apiSectionSectionPost(body);
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
| **addSectionDto** | [AddSectionDto](AddSectionDto.md) |  | [Optional] |

### Return type

[**SectionDetailDto**](SectionDetailDto.md)

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

