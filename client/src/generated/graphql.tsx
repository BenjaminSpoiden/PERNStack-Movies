import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  fetchMovies: Array<Movie>;
  fetchMovieDetail: MovieDetail;
  fetchTrendingMovies: MoviesReponse;
  fetchGenre: Array<Genres>;
  searchMovies: Array<Movie>;
  fetchCast: Array<MovieCast>;
  fetchUsers: Array<User>;
  fetchUser: User;
  me?: Maybe<User>;
};


export type QueryFetchMoviesArgs = {
  with_genres?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
};


export type QueryFetchMovieDetailArgs = {
  movie_id: Scalars['Int'];
};


export type QueryFetchTrendingMoviesArgs = {
  page: Scalars['Int'];
};


export type QuerySearchMoviesArgs = {
  page: Scalars['Int'];
  query: Scalars['String'];
};


export type QueryFetchCastArgs = {
  movie_id: Scalars['Int'];
};


export type QueryFetchUserArgs = {
  id: Scalars['Int'];
};

export type Movie = AbstractMovieClass & {
  __typename?: 'Movie';
  id: Scalars['Int'];
  adult: Scalars['Boolean'];
  original_title: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster?: Maybe<Scalars['String']>;
  genres: Array<Genres>;
  release_date: Scalars['String'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
  price: Scalars['Float'];
  wishList: Scalars['Boolean'];
};

export type AbstractMovieClass = {
  id: Scalars['Int'];
  adult: Scalars['Boolean'];
  original_title: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster?: Maybe<Scalars['String']>;
  genres: Array<Genres>;
  release_date: Scalars['String'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
  price: Scalars['Float'];
  wishList: Scalars['Boolean'];
};

export type Genres = {
  __typename?: 'Genres';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type MovieDetail = AbstractMovieClass & {
  __typename?: 'MovieDetail';
  id: Scalars['Int'];
  adult: Scalars['Boolean'];
  original_title: Scalars['String'];
  overview: Scalars['String'];
  popularity: Scalars['Float'];
  poster?: Maybe<Scalars['String']>;
  genres: Array<Genres>;
  release_date: Scalars['String'];
  vote_average: Scalars['Float'];
  vote_count: Scalars['Int'];
  price: Scalars['Float'];
  wishList: Scalars['Boolean'];
  runtime: Scalars['Int'];
  status: Scalars['String'];
  revenue: Scalars['Int'];
  production_companies: Array<ProductionCompany>;
  homepage: Scalars['String'];
  budget: Scalars['Int'];
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  id: Scalars['Int'];
  logo_path: Scalars['String'];
  name: Scalars['String'];
};

export type MoviesReponse = {
  __typename?: 'MoviesReponse';
  movieResponse?: Maybe<PaginatedMovies>;
  error?: Maybe<GenericError>;
};

export type PaginatedMovies = {
  __typename?: 'PaginatedMovies';
  page: Scalars['Int'];
  movies: Array<Movie>;
};

export type GenericError = {
  __typename?: 'GenericError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type MovieCast = {
  __typename?: 'MovieCast';
  id: Scalars['Int'];
  adult: Scalars['Boolean'];
  name: Scalars['String'];
  gender: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  created_at: Scalars['String'];
  update_at: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
  loginUser: UserResponse;
  logoutUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  userInput: UserInput;
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<GenericError>>;
  user?: Maybe<User>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MovieFragmentFragment = (
  { __typename?: 'Movie' }
  & Pick<Movie, 'id' | 'wishList' | 'popularity' | 'price' | 'overview' | 'adult' | 'original_title' | 'poster' | 'release_date' | 'vote_average' | 'vote_count'>
  & { genres: Array<(
    { __typename?: 'Genres' }
    & Pick<Genres, 'id' | 'name'>
  )> }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'age' | 'created_at' | 'update_at'>
);

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'GenericError' }
      & Pick<GenericError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserFragmentFragment
    )> }
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type LoginUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'GenericError' }
      & Pick<GenericError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & UserFragmentFragment
    )> }
  ) }
);

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logoutUser'>
);

export type FetchGenreQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchGenreQuery = (
  { __typename?: 'Query' }
  & { fetchGenre: Array<(
    { __typename?: 'Genres' }
    & Pick<Genres, 'id' | 'name'>
  )> }
);

export type FetchMoviesQueryVariables = Exact<{
  page: Scalars['Int'];
  with_genres?: Maybe<Scalars['String']>;
}>;


export type FetchMoviesQuery = (
  { __typename?: 'Query' }
  & { fetchMovies: Array<(
    { __typename?: 'Movie' }
    & MovieFragmentFragment
  )> }
);

export type FetchUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchUserQuery = (
  { __typename?: 'Query' }
  & { fetchUser: (
    { __typename?: 'User' }
    & UserFragmentFragment
  ) }
);

export type FetchUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUsersQuery = (
  { __typename?: 'Query' }
  & { fetchUsers: Array<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFragmentFragment
  )> }
);

export const MovieFragmentFragmentDoc = gql`
    fragment MovieFragment on Movie {
  id
  wishList
  popularity
  price
  overview
  adult
  original_title
  poster
  genres {
    id
    name
  }
  release_date
  vote_average
  vote_count
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  email
  age
  created_at
  update_at
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($input: UserInput!) {
  createUser(userInput: $input) {
    errors {
      field
      message
    }
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: Int!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, baseOptions);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    errors {
      field
      message
    }
    user {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, baseOptions);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, baseOptions);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const FetchGenreDocument = gql`
    query FetchGenre {
  fetchGenre {
    id
    name
  }
}
    `;

/**
 * __useFetchGenreQuery__
 *
 * To run a query within a React component, call `useFetchGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchGenreQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchGenreQuery(baseOptions?: Apollo.QueryHookOptions<FetchGenreQuery, FetchGenreQueryVariables>) {
        return Apollo.useQuery<FetchGenreQuery, FetchGenreQueryVariables>(FetchGenreDocument, baseOptions);
      }
export function useFetchGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchGenreQuery, FetchGenreQueryVariables>) {
          return Apollo.useLazyQuery<FetchGenreQuery, FetchGenreQueryVariables>(FetchGenreDocument, baseOptions);
        }
export type FetchGenreQueryHookResult = ReturnType<typeof useFetchGenreQuery>;
export type FetchGenreLazyQueryHookResult = ReturnType<typeof useFetchGenreLazyQuery>;
export type FetchGenreQueryResult = Apollo.QueryResult<FetchGenreQuery, FetchGenreQueryVariables>;
export const FetchMoviesDocument = gql`
    query FetchMovies($page: Int!, $with_genres: String) {
  fetchMovies(page: $page, with_genres: $with_genres) {
    ...MovieFragment
  }
}
    ${MovieFragmentFragmentDoc}`;

/**
 * __useFetchMoviesQuery__
 *
 * To run a query within a React component, call `useFetchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMoviesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      with_genres: // value for 'with_genres'
 *   },
 * });
 */
export function useFetchMoviesQuery(baseOptions: Apollo.QueryHookOptions<FetchMoviesQuery, FetchMoviesQueryVariables>) {
        return Apollo.useQuery<FetchMoviesQuery, FetchMoviesQueryVariables>(FetchMoviesDocument, baseOptions);
      }
export function useFetchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMoviesQuery, FetchMoviesQueryVariables>) {
          return Apollo.useLazyQuery<FetchMoviesQuery, FetchMoviesQueryVariables>(FetchMoviesDocument, baseOptions);
        }
export type FetchMoviesQueryHookResult = ReturnType<typeof useFetchMoviesQuery>;
export type FetchMoviesLazyQueryHookResult = ReturnType<typeof useFetchMoviesLazyQuery>;
export type FetchMoviesQueryResult = Apollo.QueryResult<FetchMoviesQuery, FetchMoviesQueryVariables>;
export const FetchUserDocument = gql`
    query FetchUser($id: Int!) {
  fetchUser(id: $id) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useFetchUserQuery__
 *
 * To run a query within a React component, call `useFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchUserQuery(baseOptions: Apollo.QueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
        return Apollo.useQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, baseOptions);
      }
export function useFetchUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserQuery, FetchUserQueryVariables>) {
          return Apollo.useLazyQuery<FetchUserQuery, FetchUserQueryVariables>(FetchUserDocument, baseOptions);
        }
export type FetchUserQueryHookResult = ReturnType<typeof useFetchUserQuery>;
export type FetchUserLazyQueryHookResult = ReturnType<typeof useFetchUserLazyQuery>;
export type FetchUserQueryResult = Apollo.QueryResult<FetchUserQuery, FetchUserQueryVariables>;
export const FetchUsersDocument = gql`
    query FetchUsers {
  fetchUsers {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useFetchUsersQuery__
 *
 * To run a query within a React component, call `useFetchUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUsersQuery(baseOptions?: Apollo.QueryHookOptions<FetchUsersQuery, FetchUsersQueryVariables>) {
        return Apollo.useQuery<FetchUsersQuery, FetchUsersQueryVariables>(FetchUsersDocument, baseOptions);
      }
export function useFetchUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUsersQuery, FetchUsersQueryVariables>) {
          return Apollo.useLazyQuery<FetchUsersQuery, FetchUsersQueryVariables>(FetchUsersDocument, baseOptions);
        }
export type FetchUsersQueryHookResult = ReturnType<typeof useFetchUsersQuery>;
export type FetchUsersLazyQueryHookResult = ReturnType<typeof useFetchUsersLazyQuery>;
export type FetchUsersQueryResult = Apollo.QueryResult<FetchUsersQuery, FetchUsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;