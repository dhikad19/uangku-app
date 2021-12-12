import React from 'react'
import { Container, 
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormH1,
        FormInput,
        FormButton,
        FormLabel,
        Text,
        Text1,
        TextSpan} from './LoginComponents'

const LogIn = () => {
    return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'><span>Uangku</span>.com</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Masuk dengan akunmu</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign In</FormButton>
                        <Text1>Lupa password? <TextSpan>Reset</TextSpan></Text1>
                        <Text>Belum punya akun? <TextSpan to='signup'>Daftar disini!</TextSpan></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
    </>
    )
}

export default LogIn
