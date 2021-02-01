import React, { useState } from "react"
import { useFetchGenresQuery } from "../generated/graphql"

type StateInit = {
  genres: number[]
}

export const useGenres = () => {

    const [selectedGenres, setSelectGenres] = useState<StateInit>({
        genres: []
    })

    const {data: genreData} = useFetchGenresQuery()

    return {
        genreData,
        selectedGenres,
        setSelectGenres
    }
}