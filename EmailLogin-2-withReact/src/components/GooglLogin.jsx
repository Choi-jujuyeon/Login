import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// 인증-> 웹 -> 구글
const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const onClickGoogle = async (e) => {
        e.preventDefault();

        await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <div>
            <div className="text-xl	font-bold py-8"># SocialLogin</div>
            <div className="flex flex-col">
                <button onClick={onClickGoogle}> 구글로 로그인하기 </button>
                {/* <button> 페이스북 로그인하기 </button>
                <button> 깃허브로 로그인하기 </button> */}
            </div>
        </div>
    );
};
export default GoogleLogin;
