import { NormalizedCacheObject } from "@apollo/client";
import { useMemo } from "react";
import { initializeApolloClient } from "../apollo/client";

export const useApollo = (initializeState: NormalizedCacheObject) => {
    const store = useMemo(() => initializeApolloClient(initializeState), [initializeState])
    return store
}