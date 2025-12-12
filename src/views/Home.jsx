import { useState } from "react";
import ViewToggle from "../components/ViewToggle";
import AdminView from "../components/AdminView";
import UserView from "../components/UserView";

export default function Home() {
  const [view, setView] = useState("");
  return (
    <div className="flex flex-col pt-30 pb-16 items-center">
      <h1>Generetion Thailand</h1>
      {view === "" && <h1>React - Assessment</h1>}
      {view === "User" && <h1>Home - Userview</h1>}
      {view === "Admin" && <h1>Home - Admin view</h1>}
      <div className="flex gap-16 mt-6">
        <ViewToggle
          onClick={() => {
            setView("User");
          }}
        >
          User Home view
        </ViewToggle>
        <ViewToggle
          onClick={() => {
            setView("Admin");
          }}
        >
          Admin Home view
        </ViewToggle>
      </div>
      <div className="tableview w-9/10">
        {view === "Admin" && <AdminView />}
        {view === "User" && <UserView />}
      </div>
    </div>
  );
}
