import "./App.css";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer } = Layout;

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <div style={{ marginRight: "1rem" }}>Shahid</div>
          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            items={[
              { label: "Home", key: "/" },
              { label: "Login", key: "/login" },
            ]}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
          />
        </Header>
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "rgb(0, 21, 41)",
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "rgb(0, 21, 41)",
          }}
        >
          MBC Group 2023 © جميع الحقوق محفوظة لمجموعة
        </Footer>
      </Layout>
    </>
  );
}

export default App;
