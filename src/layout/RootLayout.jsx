import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar";

function RootLayout() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
