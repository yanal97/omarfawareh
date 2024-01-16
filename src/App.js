import "./App.css";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MyHeader from "./components/MyHeader";

const { Content, Footer } = Layout;
function App() {
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <MyHeader />
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
