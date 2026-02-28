import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ marginTop: "20px", overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#1e1e2f", borderRadius: "8px" }}>
        <thead>
          <tr style={{ backgroundColor: "#3a3a55", textAlign: "left" }}>
            <th style={cellStyle}>ID</th>
            <th style={cellStyle}>Full Name</th>
            <th style={cellStyle}>Email</th>
            <th style={cellStyle}>Username</th>
            <th style={cellStyle}>City</th>
            <th style={cellStyle}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #2a2a3f" }}>
              <td style={cellStyle}>{user.id}</td>
              <td style={cellStyle}>{user.name?.firstname} {user.name?.lastname}</td>
              <td style={cellStyle}>{user.email}</td>
              <td style={cellStyle}>{user.username}</td>
              <td style={cellStyle}>{user.address?.city}</td>
              <td style={cellStyle}>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  padding: "12px 15px",
  color: "#fff",
  fontSize: "14px"
};
