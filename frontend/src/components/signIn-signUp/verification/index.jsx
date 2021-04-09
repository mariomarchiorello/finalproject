import Header from "../../header"
import { Background, GlobalInput, Main } from "../../../globalstyles/globalStyle"
import { VerButton, VerificationMsg, VerInputContainer, VerLabel } from "./style"

const Verification = () => {


    return <>
        <Background>
            <Header/>
            <Main>
                <VerificationMsg>
                    <span>Congratulations!</span>
                    <p>Please check your email for the verification code to finish the process.</p>
                </VerificationMsg>
                <VerInputContainer>
                    <VerLabel for="code">verification code</VerLabel>
                    <GlobalInput type="text" name="code"></GlobalInput>
                    <VerLabel for="email">email</VerLabel>
                    <GlobalInput type="text" name="email"></GlobalInput>
                    <VerLabel for="user">username</VerLabel>
                    <GlobalInput type="text" name="user"></GlobalInput>
                    <VerLabel for="password">password</VerLabel>
                    <GlobalInput type="password" name="password"></GlobalInput>
                    <VerLabel for="password_repeat">repeat password</VerLabel>
                    <GlobalInput type="password" name="password_repeat"></GlobalInput>
                    <VerButton>Register</VerButton>
                </VerInputContainer>
            </Main>
        </Background>
    </>

}

export default (Verification)