import Header from "../components/Header";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="">
        <Routers />
      </section>
    </>
  );
};

export default Layout;
