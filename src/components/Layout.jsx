import Navbar from "./Navbar";
import Feature from "./Feature";
import Creations from "./Creations";
import Footer from "./Footer";

const Layout = () => {
  return (
    <main>
      <section id="hero">
        <div className="container max-w-6xl mx-auto px-6 py-12 md:px-0">
          <Navbar />

          <div className="max-w-lg my-32 p-4 font-thin leading-[50px] text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0">
            impressive experiences that Deliver
          </div>
        </div>
      </section>
      <Feature />
      <Creations />
      <Footer />
    </main>
  );
};

export default Layout;
