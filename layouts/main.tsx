import Footer from "./footer";
import Header from "./header/header";
function RootLayoutMain({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default RootLayoutMain;
