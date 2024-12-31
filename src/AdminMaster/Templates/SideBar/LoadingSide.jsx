import React from "react";

const Sidebar = () => {
  const menuItems = [
    { id: 1, width: "80px" },
    { id: 2, width: "96px" },
    { id: 3, width: "64px" },
    { id: 4, width: "96px" },
    { id: 5, width: "64px" },
    { id: 6, width: "64px" },
    { id: 7, width: "64px" },
  ];

  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps animate-pulse" id="sidenav-main">
      <div className="sidenav-header d-flex flex-column align-items-center">
        <div
          className="rounded-circle bg-secondary"
          style={{ width: "24px", height: "24px"}}
        ></div>
        <div
          className="mt-3 bg-secondary rounded"
          style={{ width: "128px", height: "40px" }}
        ></div>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {menuItems.map((item) => (
            <li
              className="nav-item d-flex align-items-center gap-2 mb-3"
              key={item.id}
            >
              <div
                className="rounded-circle bg-secondary"
                style={{ width: "24px", height: "24px" }}
              ></div>
              <div
                className="bg-secondary rounded"
                style={{ width: item.width, height: "16px" }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
