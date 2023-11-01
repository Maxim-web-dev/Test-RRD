import { useRouteError, Link } from "react-router-dom"

export default function ErrorElement() {
  const error = useRouteError()
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <h1><i>{error.statusText || error.message}</i></h1>
        <Link to='/'>Go Home</Link>
    </div>
  )
}
