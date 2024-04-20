// Redux Toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flagsApi = createApi({
    reducerPath: 'flagsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3003/`,
    }),

    endpoints: (build) => ({
        getAllCurrency: build.query({
            query: () => 'currencies',
        }),

        getFlags: build.query({
            query: (param) => `fiats/${param}`,
        }),
    }),
});

export const { useGetFlagsQuery, useGetAllCurrencyQuery } = flagsApi;
