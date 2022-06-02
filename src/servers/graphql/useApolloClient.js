import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";

function useApolloClient() {
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const httpLink = createHttpLink(
        {
            // uri: "http://localhost:4001/graphql",
            uri: "https://dropgo.herokuapp.com/graphql",

        });

    const authLink = setContext((_, { headers }) => {
        let accessToken
        // get the authentication token from local storage if it exists
        if (typeof window !== 'undefined') {
            const storeOwnerInfo = JSON.parse(localStorage.getItem('storeOwnerInfo'))
            accessToken = storeOwnerInfo?.accessToken
        }
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: accessToken ? `Bearer ${accessToken}` : "",
            }
        }
    });
    const defaultOptions = {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
    }

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        // closeSnackbar();
        if (graphQLErrors)
            console.log('Theres an error')
        // graphQLErrors.forEach(
        //     ({ message, locations, path }) => {
        //         console.log(
        //             `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        //         )
        //         console.log(message)
        //         enqueueSnackbar(
        //             message,
        //             {
        //                 // variant: 'error',
        //                 // variant: 'default',
        //                 // variant: 'success',
        //                 variant: 'warning',
        //                 // variant: 'info',
        //                 anchorOrigin: {
        //                     vertical: 'bottom',
        //                     horizontal: 'left',
        //                 },
        //                 preventDuplicate: true,
        //             }
        //         )
        //     }
        // )

    });

    const client = new ApolloClient({
        link: from([errorLink, authLink, httpLink]),
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions,
    });

    return { client }
}
export default useApolloClient