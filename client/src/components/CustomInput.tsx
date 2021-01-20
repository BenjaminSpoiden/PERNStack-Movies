import { FormControl, FormControlProps, FormErrorMessage, FormLabel, Input, InputProps, Text, InputGroup, InputLeftElement, FormHelperText } from "@chakra-ui/react";
import { useField } from "formik";
import { InputHTMLAttributes, ReactNode, useState } from "react";


interface InputData {
    name: string,
    placeholder?: string
    icon?: ReactNode
    helpertext?: string
}

export const CustomInput: React.FC<FormControlProps & InputData & InputProps & InputHTMLAttributes<HTMLInputElement>> = (props) => {

    const [field, meta] = useField(props)
    const [didFocus, setDidFocus] = useState(false)
    const handleFocus = () => setDidFocus(true)
    const showFeedback = (!!didFocus && field.value?.trim()?.length > 2) || meta.touched

    return (
        <FormControl py={4} isInvalid={didFocus && !!meta.error} {...props} >
            <FormLabel htmlFor={props.name} >
                <Text textTransform="capitalize"> {props.name} </Text>
            </FormLabel>
            <InputGroup id={props.name} >
                <InputLeftElement pointerEvents="none" children={props.icon} />
                <Input {...props} {...field} id={props.name} placeholder={props.placeholder} type={props.type} onFocus={handleFocus} />
            </InputGroup>
            
            { showFeedback ? <FormErrorMessage> {meta.error ? meta.error : null} </FormErrorMessage> : <FormHelperText>{props.helpertext}</FormHelperText>}
        </FormControl>
    )
}