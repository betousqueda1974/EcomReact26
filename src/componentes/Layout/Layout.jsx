import styles from "./Layout.module.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
/*
export function Layout(){
  return(
    <>
      <Header />
      <main className={styles.main}>
        <Outlet/>
      </main>
      <Footer />
    </>
 );
}
*/

export function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}