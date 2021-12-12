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
    TextSpan} from './SignupComponents'


const SignupData = () => {
    return (
        <>
            <Container>
            <FormWrap>
                <Icon to='/'><span>Uangku</span>.com</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Daftar <br/> <span>gratis 30 hari untuk pengguna pertama kali</span></FormH1>
                        <FormLabel htmlFor='for'>User Name</FormLabel>
                        <FormInput type='username' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign Up</FormButton>
                        <Text>Sudah punya akun? <TextSpan to='login'>Masuk</TextSpan></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
        </>
    )
}

export default SignupData
