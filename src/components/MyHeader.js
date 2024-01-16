import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Layout, Menu } from "antd";
const { Header } = Layout;
const MyHeader = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, [pathname]);
  return (
    <Header
      style={{
        border: "red solid 1px",
        display: "flex",
        // flexDirection: "row",
        alignItems: "center",
        color: "white",
      }}
    >
      {user ? (
        <div style={{ marginRight: "1rem" }}>
          Welcome <b>{user}</b>
        </div>
      ) : (
        <div style={{ marginRight: "1rem" }}>Shahid</div>
      )}

      <Menu
        onClick={({ key }) => {
          if (key === "/logout") {
            localStorage.removeItem("user");
            setUser(null);
          } else {
            navigate(key);
          }
        }}
        items={[
          { label: "Home", key: "/" },
          //   !user ? { label: "Login", key: "/login" } : null,
          user
            ? { label: "Logout", key: "/logout" }
            : { label: "Login", key: "/login" },
        ]}
        theme="dark"
        mode="horizontal"
        style={{ width: "10%" }}
      />

      {/* {user && (
        <div
          style={{
            // display: "flex",
            // flexDirection: "row",
            // alignSelf: "center",
            border: "white solid 1px",
          }}
        >
          <span>Welcome {user}</span>{" "}
          <a href="/" onMouseDown={logout}>
            Logout
          </a>
        </div>
      )} */}
    </Header>
  );
  //   function logout(params) {
  //     localStorage.removeItem("user");
  //     setUser(null);
  //   }
};

export default MyHeader;
