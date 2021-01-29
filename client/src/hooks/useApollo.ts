import { useMemo } from "react";
import { APOLLO_STATE_PROP_NAME, initializeApolloClient } from "../apollo/client";

export const useApollo = (pageProps: any) => {
    const state = pageProps[APOLLO_STATE_PROP_NAME]
    const store = useMemo(() => initializeApolloClient(state), [state])
    return store
}