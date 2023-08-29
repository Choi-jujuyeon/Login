import EmailLogin from "./components/EmailLogin";
import GoogleLogin from "./components/GooglLogin";
import Login from "./components/Login";

function App() {
    return (
        <div className="bg-slate-200 min-h-screen flex flex-col justify-start">
            <EmailLogin />
            <Login />
            <div className="text-xl	font-bold py-8"># Verify from PhoneNum</div>

            <GoogleLogin />
        </div>
    );
}
export default App;
