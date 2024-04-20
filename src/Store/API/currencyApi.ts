// Redux Toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api_key = 'bb3c2b76e187d88b481cf3fc';
// const api_key2 = 'c3d5164478f1fb9fbef84100'

export const currencyApi = createApi({
    reducerPath: 'currencyApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `https://v6.exchangerate-api.com/v6/${api_key}/`,
    }),

    endpoints: (build) => ({
        getPair: build.query({
            query: (param) => `pair/${param.from}/${param.to}`,
        }),
    }),
});

export const { useGetPairQuery } = currencyApi;
