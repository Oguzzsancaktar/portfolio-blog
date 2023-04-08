import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="blog">
      <Header />
      <main className="container mx-auto flex-1">{children}</main>
      {/* <Footer/> */}
    </div>
  );
}
