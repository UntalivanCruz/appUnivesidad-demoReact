/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { country } from '../models/country';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CountryService {

    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCountry(
        requestBody?: country,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/country',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCountry(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/country',
        });
    }

    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putApiCountry(
        id: string,
        requestBody?: country,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/country/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiCountry(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/country/{id}',
            path: {
                'id': id,
            },
        });
    }

}
