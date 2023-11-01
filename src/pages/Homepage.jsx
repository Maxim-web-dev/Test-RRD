export default function HomePage() {
    return (
      <div>
        <h1>Welcome home...</h1>
        <p style={{ position: "absolute", right: "100px", top: "20px" }}>{localStorage.getItem('name')}</p>
      </div>
    )
  }