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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  fetchMovie?: Maybe<Movie>;
  fetchMovies: PaginatedMovies;
  fetchGenres: Array<Genre>;
  movieTableLength: Scalars['Int'];
  searchMovies: Array<Movie>;
  fetchUsers: Array<User>;
  fetchUser: User;
  me?: Maybe<User>;
};


export type QueryFetchMovieArgs = {
  id: Scalars['Int'];
};


export type QueryFetchMoviesArgs = {
  selected_genres?: Maybe<Array<Scalars['Int']>>;
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QuerySearchMoviesArgs = {
  query?: Maybe<Scalars['String']>;
};


export type QueryFetchUserArgs = {
  id: Scalars['Int'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['Int'];
  wish_list: Scalars['Boolean'];
  popularity?: Maybe<Scalars['Float']>;
  price: Scalars['Int'];
  overview?: Maybe<Scalars['String']>;
  adult: Scalars['Boolean'];
  original_title?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Float']>;
  vote_count?: Maybe<Scalars['Int']>;
  created_at: Scalars['String'];
  updated_at: Scalars['DateTime'];
  genres?: Maybe<Array<Genre>>;
};


export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PaginatedMovies = {
  __typename?: 'PaginatedMovies';
  movies: Array<Movie>;
  hasMore: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  created_at: Scalars['String'];
  update_at: Scalars['String'];
  movieItems?: Maybe<Array<Movie>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserResponse;
  loginUser: UserResponse;
  logoutUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  deleteMovie: Scalars['Boolean'];
  addGenreMovie: Scalars['Boolean'];
  deleteItems: Scalars['Boolean'];
  deleteItem: Scalars['Boolean'];
  addItem: Scalars['Boolean'];
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


export type MutationDeleteMovieArgs = {
  movie_id: Scalars['Int'];
};


export type MutationAddGenreMovieArgs = {
  genre_id: Scalars['Int'];
  movie_id: Scalars['Int'];
};


export type MutationDeleteItemArgs = {
  movie_id: Scalars['Int'];
};


export type MutationAddItemArgs = {
  movie_id: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<GenericError>>;
  user?: Maybe<User>;
};

export type GenericError = {
  __typename?: 'GenericError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MovieFragmentFragment = (
  { __typename?: 'Movie' }
  & Pick<Movie, 'id' | 'wish_list' | 'popularity' | 'price' | 'overview' | 'adult' | 'original_title' | 'poster' | 'release_date' | 'vote_count' | 'vote_average' | 'created_at' | 'updated_at'>
  & { genres?: Maybe<Array<(
    { __typename?: 'Genre' }
    & Pick<Genre, 'id' | 'name'>
  )>> }
);

export type UserFragmentFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'age' | 'created_at' | 'update_at'>
  & { movieItems?: Maybe<Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'original_title' | 'poster' | 'price'>
    & { genres?: Maybe<Array<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'id' | 'name'>
    )>> }
  )>> }
);

export type AdditemMutationVariables = Exact<{
  movie_id: Scalars['Int'];
}>;


export type AdditemMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addItem'>
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

export type DeleteItemMutationVariables = Exact<{
  movie_id: Scalars['Int'];
}>;


export type DeleteItemMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteItem'>
);

export type DeleteItemsMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteItemsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteItems'>
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

export type FetchGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchGenresQuery = (
  { __typename?: 'Query' }
  & { fetchGenres: Array<(
    { __typename?: 'Genre' }
    & Pick<Genre, 'id' | 'name'>
  )> }
);

export type FetchMovieQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchMovieQuery = (
  { __typename?: 'Query' }
  & { fetchMovie?: Maybe<(
    { __typename?: 'Movie' }
    & MovieFragmentFragment
  )> }
);

export type FetchMoviesQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  selected_genres?: Maybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type FetchMoviesQuery = (
  { __typename?: 'Query' }
  & { fetchMovies: (
    { __typename?: 'PaginatedMovies' }
    & Pick<PaginatedMovies, 'hasMore'>
    & { movies: Array<(
      { __typename?: 'Movie' }
      & MovieFragmentFragment
    )> }
  ) }
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

export type SearchMoviesQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type SearchMoviesQuery = (
  { __typename?: 'Query' }
  & { searchMovies: Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'original_title' | 'poster' | 'overview'>
    & { genres?: Maybe<Array<(
      { __typename?: 'Genre' }
      & Pick<Genre, 'id' | 'name'>
    )>> }
  )> }
);

export const MovieFragmentFragmentDoc = gql`
    fragment MovieFragment on Movie {
  id
  wish_list
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
  vote_count
  vote_average
  created_at
  updated_at
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  email
  age
  movieItems {
    id
    original_title
    poster
    price
    genres {
      id
      name
    }
  }
  created_at
  update_at
}
    `;
export const AdditemDocument = gql`
    mutation Additem($movie_id: Int!) {
  addItem(movie_id: $movie_id)
}
    `;
export type AdditemMutationFn = Apollo.MutationFunction<AdditemMutation, AdditemMutationVariables>;

/**
 * __useAdditemMutation__
 *
 * To run a mutation, you first call `useAdditemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdditemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [additemMutation, { data, loading, error }] = useAdditemMutation({
 *   variables: {
 *      movie_id: // value for 'movie_id'
 *   },
 * });
 */
export function useAdditemMutation(baseOptions?: Apollo.MutationHookOptions<AdditemMutation, AdditemMutationVariables>) {
        return Apollo.useMutation<AdditemMutation, AdditemMutationVariables>(AdditemDocument, baseOptions);
      }
export type AdditemMutationHookResult = ReturnType<typeof useAdditemMutation>;
export type AdditemMutationResult = Apollo.MutationResult<AdditemMutation>;
export type AdditemMutationOptions = Apollo.BaseMutationOptions<AdditemMutation, AdditemMutationVariables>;
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
export const DeleteItemDocument = gql`
    mutation DeleteItem($movie_id: Int!) {
  deleteItem(movie_id: $movie_id)
}
    `;
export type DeleteItemMutationFn = Apollo.MutationFunction<DeleteItemMutation, DeleteItemMutationVariables>;

/**
 * __useDeleteItemMutation__
 *
 * To run a mutation, you first call `useDeleteItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemMutation, { data, loading, error }] = useDeleteItemMutation({
 *   variables: {
 *      movie_id: // value for 'movie_id'
 *   },
 * });
 */
export function useDeleteItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemMutation, DeleteItemMutationVariables>) {
        return Apollo.useMutation<DeleteItemMutation, DeleteItemMutationVariables>(DeleteItemDocument, baseOptions);
      }
export type DeleteItemMutationHookResult = ReturnType<typeof useDeleteItemMutation>;
export type DeleteItemMutationResult = Apollo.MutationResult<DeleteItemMutation>;
export type DeleteItemMutationOptions = Apollo.BaseMutationOptions<DeleteItemMutation, DeleteItemMutationVariables>;
export const DeleteItemsDocument = gql`
    mutation DeleteItems {
  deleteItems
}
    `;
export type DeleteItemsMutationFn = Apollo.MutationFunction<DeleteItemsMutation, DeleteItemsMutationVariables>;

/**
 * __useDeleteItemsMutation__
 *
 * To run a mutation, you first call `useDeleteItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteItemsMutation, { data, loading, error }] = useDeleteItemsMutation({
 *   variables: {
 *   },
 * });
 */
export function useDeleteItemsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteItemsMutation, DeleteItemsMutationVariables>) {
        return Apollo.useMutation<DeleteItemsMutation, DeleteItemsMutationVariables>(DeleteItemsDocument, baseOptions);
      }
export type DeleteItemsMutationHookResult = ReturnType<typeof useDeleteItemsMutation>;
export type DeleteItemsMutationResult = Apollo.MutationResult<DeleteItemsMutation>;
export type DeleteItemsMutationOptions = Apollo.BaseMutationOptions<DeleteItemsMutation, DeleteItemsMutationVariables>;
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
export const FetchGenresDocument = gql`
    query FetchGenres {
  fetchGenres {
    id
    name
  }
}
    `;

/**
 * __useFetchGenresQuery__
 *
 * To run a query within a React component, call `useFetchGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchGenresQuery(baseOptions?: Apollo.QueryHookOptions<FetchGenresQuery, FetchGenresQueryVariables>) {
        return Apollo.useQuery<FetchGenresQuery, FetchGenresQueryVariables>(FetchGenresDocument, baseOptions);
      }
export function useFetchGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchGenresQuery, FetchGenresQueryVariables>) {
          return Apollo.useLazyQuery<FetchGenresQuery, FetchGenresQueryVariables>(FetchGenresDocument, baseOptions);
        }
export type FetchGenresQueryHookResult = ReturnType<typeof useFetchGenresQuery>;
export type FetchGenresLazyQueryHookResult = ReturnType<typeof useFetchGenresLazyQuery>;
export type FetchGenresQueryResult = Apollo.QueryResult<FetchGenresQuery, FetchGenresQueryVariables>;
export const FetchMovieDocument = gql`
    query FetchMovie($id: Int!) {
  fetchMovie(id: $id) {
    ...MovieFragment
  }
}
    ${MovieFragmentFragmentDoc}`;

/**
 * __useFetchMovieQuery__
 *
 * To run a query within a React component, call `useFetchMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchMovieQuery(baseOptions: Apollo.QueryHookOptions<FetchMovieQuery, FetchMovieQueryVariables>) {
        return Apollo.useQuery<FetchMovieQuery, FetchMovieQueryVariables>(FetchMovieDocument, baseOptions);
      }
export function useFetchMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMovieQuery, FetchMovieQueryVariables>) {
          return Apollo.useLazyQuery<FetchMovieQuery, FetchMovieQueryVariables>(FetchMovieDocument, baseOptions);
        }
export type FetchMovieQueryHookResult = ReturnType<typeof useFetchMovieQuery>;
export type FetchMovieLazyQueryHookResult = ReturnType<typeof useFetchMovieLazyQuery>;
export type FetchMovieQueryResult = Apollo.QueryResult<FetchMovieQuery, FetchMovieQueryVariables>;
export const FetchMoviesDocument = gql`
    query FetchMovies($cursor: String, $limit: Int!, $selected_genres: [Int!]) {
  fetchMovies(cursor: $cursor, limit: $limit, selected_genres: $selected_genres) {
    hasMore
    movies {
      ...MovieFragment
    }
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
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *      selected_genres: // value for 'selected_genres'
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
export const SearchMoviesDocument = gql`
    query SearchMovies($query: String) {
  searchMovies(query: $query) {
    id
    original_title
    poster
    overview
    genres {
      id
      name
    }
  }
}
    `;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions?: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, baseOptions);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, baseOptions);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;