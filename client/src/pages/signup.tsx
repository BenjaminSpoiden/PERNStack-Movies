import { Container, Flex, Heading, Button, Text, Link } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { CredentialBox } from "../components/CredentialBox"
import { CustomInput } from "../components/CustomInput"
import { BiLock, BiUser } from "react-icons/bi"
import { FiMail } from "react-icons/fi"
import { Form, Formik } from "formik"
import { ValidationSchema } from "../utils/ValidationSchema"
import { MeDocument, MeQuery, useCreateUserMutation } from "../generated/graphql"
import { toErrorMap } from "../utils/toErrorMap"

const Register = () => {

    const router = useRouter()
    const [createUserMutation] = useCreateUserMutation()

    return (
        <Container minH="100vh">
            <Flex minH="100vh" align="center" justifyContent="center" >
                <CredentialBox w="480px" >
                    <Heading>Register</Heading>

                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: ""
                        }}
                        onSubmit={async (values, {setErrors}) => {
                            const response = createUserMutation({
                                variables: {
                                    input: values
                                },
                                update: (cache, {data}) => {
                                    cache.writeQuery<MeQuery>({
                                        query: MeDocument,
                                        data: {
                                            __typename: "Query",
                                            me: data?.createUser.user
                                        }
                                    })
                                }
                            })

                            return response 
                                .then(result => {
                                    if(result.data?.createUser.errors) {
                                        setErrors(toErrorMap(result.data.createUser.errors))
                                    }else if(result.data?.createUser.user) {
                                        router.push("/")
                                    }
                                })
                        }}
                        validationSchema={ValidationSchema}
                    >
                        {({isSubmitting, handleBlur, handleChange, isValid}) => {

                            return (
                                <Form>
                                    <CustomInput 
                                        name="username"
                                        placeholder="Enter your username"
                                        type="text"
                                        icon={<BiUser />}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        name="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        icon={<FiMail />}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    <CustomInput
                                        name="password"
                                        placeholder="Enter your password"
                                        type="password"
                                        icon={<BiLock />}
                                        helpertext="Enter atleast 8 characters."
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                    />
                                    <Button d="flex" w="100%" colorScheme="orange" my={4} disabled={!isValid} isLoading={isSubmitting} type="submit" >
                                        Login
                                    </Button>
                                </Form>
                            )}}
                    </Formik>
                    <Link onClick={() => router.replace("/login")} ><Text fontStyle="italic" fontSize="sm" >Already have an account ? Login now</Text></Link>
                </CredentialBox>
            </Flex>
        </Container>
    )
}

export default Register