import React from "react";

export default function Page() {
  const contributor = {
    fullName: "Lawal Muhammed Olamide",
    zeduUsername: "@muhammed",
    githubEmail: "lawalmuhammed2008@gmail.com",
    role: "AI product builder",
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Contributor Profile: {contributor.fullName}</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #ccc" }}>
            <th style={{ padding: "8px" }}>Full Name</th>
            <th style={{ padding: "8px" }}>Zedu Username</th>
            <th style={{ padding: "8px" }}>GitHub Email</th>
            <th style={{ padding: "8px" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px" }}>{contributor.fullName}</td>
            <td style={{ padding: "8px" }}>{contributor.zeduUsername}</td>
            <td style={{ padding: "8px" }}>{contributor.githubEmail}</td>
            <td style={{ padding: "8px" }}>{contributor.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
