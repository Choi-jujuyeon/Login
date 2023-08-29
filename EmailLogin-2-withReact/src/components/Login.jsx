import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                console.log("로그인 성공");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                console.log("로그인 실패");
            });
    };
    return (
        <>
            <div className="py-10">
                <div>
                    <div>Email address</div>
                    <input
                        id="email-address"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <div>Password</div>
                    <input
                        id="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button onClick={onLogin}>Login</button>
                </div>
            </div>
        </>
    );
};
export default Login;
