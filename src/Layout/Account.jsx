import { Outlet, Link } from "react-router-dom"

export default function Account() {
  return (
    <>
        <header>
            <Link to='signin'>Sign In</Link>
            <Link to='signup'>Sign Up</Link>
        </header>
        <Outlet />
    </>
  )
}
