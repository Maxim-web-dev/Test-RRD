import { Link, Outlet } from "react-router-dom";

export default function StartPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "60vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Our company</h1>
        <h3>Expert Management</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>

        <h3>Secure Investment</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>
        <h3>Instant Trading</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>

        <h3>Happy Customers</h3>
        <p>
          Incidunt odit rerum tenetur alias architecto asperiores omnis cumque
          doloribus aperiam numquam! Eligendi corrupti, molestias laborum
          dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus
          officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo
          officia ullam repudiandae repellat veritatis unde reiciendis possimus
          animi autem natus
        </p>
      </div>
      <Link
        to="account"
        style={{ position: "absolute", right: "100px", top: "20px" }}
      >
        Войти
      </Link>
      <Outlet />
    </div>
  );
}
