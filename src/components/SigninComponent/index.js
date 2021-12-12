import React from 'react'
import { Container, 
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormButton,
        FormH1,
        FormButtonSec,
        FormH2} from './SigninComponents'

const SignIn = () => {
    return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>Uangku<span>.com</span></Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Simpan Uangmu</FormH1>
                        <FormH2>Bergabung Sekarang <span>Uangku</span>.com hari ini.</FormH2>
                        <FormButton to='signup'>Daftar</FormButton>
                        <FormButtonSec to='login'>Masuk</FormButtonSec>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>    
    </>
    )
}

export default SignIn
