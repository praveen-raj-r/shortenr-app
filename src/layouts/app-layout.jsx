import Header from "@/components/header";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main className="container min-h-screen px-10 mx-auto">
        <Header />
        <Outlet />
      </main>
      {/* <Footer /> */}
      <div className="p-10 mt-10 text-center text-gray-800">
        Made by Praveen Raj
      </div>
    </div>
  );
}

export default AppLayout;
