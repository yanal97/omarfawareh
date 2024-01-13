import "./App.css";
import { Layout, Menu } from "antd";
import Carousel from "./components/Carousel";
const { Header, Content, Footer } = Layout;

function App() {
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
          <div>Shahid</div>
          <Menu
            items={[{ label: "Login", key: "home" }]}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{
              flex: 1,
              minWidth: 0,
            }}
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
          <Carousel />
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
