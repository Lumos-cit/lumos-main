import React, { useEffect, useState } from "react";
import App from "./App";
import Auth from "./Auth";

function Router() {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem("admin");
    if (key) setAdmin(true);
    else setAdmin(false);
  }, []);

  return <>{admin ? <App /> : <Auth setAdmin={setAdmin} />}</>;
}

export default Router;
