import { Background, GlobalInput, Main, GlobalLabel, } from "../../../globalstyles/globalStyle"
import Header from "../../header"
import { RegistrationWrapper, RegInputContainer, RegButton } from "./style"




const SignUp = () => {



    return <>
        <Background>
            <Header/>
            <Main>
                <RegistrationWrapper>
                    <span>Register New Account</span>
                </RegistrationWrapper>
                <RegInputContainer>
                    <GlobalLabel for="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email"></GlobalInput>
                    <RegButton>Continue</RegButton>
                </RegInputContainer>
            </Main>
        </Background>
    </>
}

export default (SignUp)