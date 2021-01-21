import { useMeQuery } from "../generated/graphql"
import { isServer } from "../utils/isServer"


export const useAuth = () => {
    const {data, error, loading} = useMeQuery({
        skip: isServer
    })

    return {
        me: data && data?.me,
        error,
        loading
    }
}