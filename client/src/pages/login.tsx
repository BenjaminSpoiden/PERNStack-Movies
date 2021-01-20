import { Text, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { BiLock, BiUser } from "react-icons/bi"
import { Container } from "../components/Container"
import { CredentialBox } from "../components/CredentialBox"
import { CustomInput } from "../components/CustomInput"
import { Form, Formik } from "formik"
import { sleep } from "../utils/sleep"

const Login = () => {
    const router = useRouter()

   

    return (
        <Container minH="100vh">
            <Flex minH="100vh" align="center" justifyContent="center" >
                <CredentialBox w="480px" >
                    <Heading>Login</Heading>

                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        onSubmit={async (values) => {
                            await sleep(1000)
                            console.log(values)
                        }}
                        
                    >
                        {({isSubmitting, isValid, handleBlur, handleChange}) => (
                            <Form>
                                <CustomInput 
                                    name="username"
                                    placeholder="Enter your username or email"
                                    type="text"
                                    icon={<BiUser />}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                />
                                
                                <CustomInput
                                    name="password"
                                    placeholder="Enter your password"
                                    type="password"
                                    icon={<BiLock />}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Button d="flex" m="auto" w="100%" disabled={!isValid} colorScheme="orange" my={4} type="submit" isLoading={isSubmitting} >
                                    Login
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Link onClick={() => router.replace("/signup")} ><Text fontStyle="italic" fontSize="sm" >Don't have an account ? Register one now</Text></Link>
                </CredentialBox>
            </Flex>
        </Container>
    )
}


export default Login