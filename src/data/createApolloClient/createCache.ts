import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";

function dataIdFromObject(obj: any) {
    switch (obj.__typename) {
        default:
            return defaultDataIdFromObject(obj);
    }
}

export default function createCache() {
    // https://www.apollographql.com/docs/react/basics/caching.html#configuration
    return new InMemoryCache({
        dataIdFromObject,
    });
}
