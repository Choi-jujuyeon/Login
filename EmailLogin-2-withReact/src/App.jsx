import EmailLogin from "./components/EmailLogin";
import Login from "./components/Login";

function App() {
    return (
        <div className="bg-slate-200 min-h-screen flex flex-col justify-start">
            <EmailLogin />
            <Login />
            <div className="text-xl	font-bold py-8"># Verify from PhoneNum</div>

            <div className="text-xl	font-bold py-8"># SocialLogin</div>
            <div className="flex flex-col">
                <button> 구글로 로그인하기 </button>
                <button> 페이스북 로그인하기 </button>
                <button> 깃허브로 로그인하기 </button>
            </div>
        </div>
    );
}
export default App;
