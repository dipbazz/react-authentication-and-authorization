import { Link, Outlet } from "react-router-dom"

export const Index = () => {
    return (
        <>
            <h1>Home page</h1>
            <Link to="/authenticated" style={{ padding: 10 }}>authenticated</Link>
            <Link to="/unauthenticated" style={{ padding: 10 }}>unauthenticated</Link>
            <Link to="/authenticated-and-authorized" style={{ padding: 10 }}>authenticated and authorized</Link>
            <Link to="/authenticated-and-unauthorized" style={{ padding: 10 }}>authenticated and unauthorized</Link>
            <Outlet />
        </>
    )
}
