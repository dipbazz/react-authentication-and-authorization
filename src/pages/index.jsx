import { Link, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthProvider"

export const Index = () => {
    const {token, logout} = useAuth();

    return (
        <>
            <h1>Home page</h1>
            {
                !!token ? (
                    <>
                        <Link to="/unauthenticated" style={{ padding: 10 }}>unauthenticated</Link>
                        <Link to="/authenticated" style={{ padding: 10 }}>authenticated</Link>
                        <Link to="/authenticated-and-unauthorized" style={{ padding: 10 }}>authenticated and unauthorized</Link>
                        <Link to="/authenticated-and-authorized" style={{ padding: 10 }}>authenticated and authorized</Link>
                        <button onClick={() => logout() }>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )
            }
            <Outlet />
        </>
    )
}
