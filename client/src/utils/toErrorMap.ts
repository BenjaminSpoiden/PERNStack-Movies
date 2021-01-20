import { GenericError } from "../generated/graphql"

export const toErrorMap = function (errors: GenericError[]) {
    const errorMap: Record<string, string> = {}

    errors.forEach(({ field, message }) => {
        errorMap[field] = message
    })

    return errorMap
}