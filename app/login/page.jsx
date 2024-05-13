import LoginForm from "../components/LoginForm"

export default function LoginPage() {
    return (
        <div className= "min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: 'url("/images/background/login.png")' }}>      
            <LoginForm />
        </div>
    )
}