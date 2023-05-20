import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

function Layout({children}) {
  return (
    <>
      <Navbar />
        <main>
          {children}
        </main>
      <Footer />
    </>
  );
}

export default Layout;
