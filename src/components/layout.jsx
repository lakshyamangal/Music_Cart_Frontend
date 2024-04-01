import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="site-wrapper">
      <div>hello i am header</div>
      <Outlet />
      <div>hello i am footer</div>
    </div>
  );
}
