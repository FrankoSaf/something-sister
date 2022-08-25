import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";
import { SignUpContainer } from "./sign-in-form.styles";

function SignInForm() {
    const { setEmail, setPassword, loginCheck, message } =
        useContext(userContext);

    return (
        <SignUpContainer>
            <h2>Already have an account?</h2>
            <span>Sign in here:</span>

            <br />

            <form action="" id="sign-in-form">
                <label for="email">E-Mail: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label for="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
            </form>

            <button
                type="submit"
                form="sign-in-form"
                value="Submit"
                onClick={loginCheck}
            >
                SIGN IN
            </button>

            <h4 style={{ color: "red" }}>{message}</h4>
        </SignUpContainer>
    );
}

export default SignInForm;
