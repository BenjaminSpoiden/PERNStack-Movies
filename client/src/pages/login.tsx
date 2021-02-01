import { Text, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { BiLock, BiUser } from "react-icons/bi"
import { Container } from "../components/Container"
import { CredentialBox } from "../components/CredentialBox"
import { CustomInput } from "../components/CustomInput"
import { Form, Formik } from "formik"
import { MeDocument, MeQuery, useLoginUserMutation } from "../generated/graphql"
import { toErrorMap } from "../utils/toErrorMap"
import Head from "next/head"

const Login = () => {
    const router = useRouter()

    const [loginUserMutation] = useLoginUserMutation({
        onCompleted: () => {
            router.push("/")
        },
        onError: (err) => console.log(err),
        
    })

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Container minH="100vh">
                <Flex minH="100vh" align="center" justifyContent="center" >
                    <CredentialBox w="480px" >
                        <Heading textColor="white" >Login</Heading>

                        <Formik
                            initialValues={{
                                username: "",
                                password: ""
                            }}
                            onSubmit={async (values, {setErrors}) => {
                                const response = loginUserMutation({
                                    variables: values,
                                    update: (cache, {data}) => {
                                        cache.writeQuery<MeQuery>({
                                            query: MeDocument,
                                            data: {
                                                __typename: "Query",
                                                me: data?.loginUser.user
                                            }
                                        })
                                    }
                                
                                })
                                return response
                                    .then(result => {
                                        if(result.data?.loginUser.errors) {
                                            setErrors(toErrorMap(result.data.loginUser.errors))
                                        }
                                    })
                                    .catch(e => console.log("Something when wrong: ", e.message)) 
                            }}
                        >
                            {({isSubmitting, values, handleBlur, handleChange}) => (
                                <Form>
                                    <CustomInput 
                                        name="username"
                                        placeholder="Enter your username or email"
                                        type="text"
                                        icon={<BiUser />}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                    />
                                    
                                    <CustomInput
                                        name="password"
                                        placeholder="Enter your password"
                                        type="password"
                                        icon={<BiLock />}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    <Button d="flex" m="auto" w="100%" colorScheme="orange" my={4} type="submit" isLoading={isSubmitting} >
                                        Login
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                        <Link onClick={() => router.replace("/signup")} ><Text fontStyle="italic" fontSize="sm" >Don't have an account ? Register one now</Text></Link>
                    </CredentialBox>
                </Flex>
            </Container>
        </>
    )
}


export default Login