import React from "react";

/**
 * Sidebar Item Group
 *
 * @param {Object} props
 * @param {ReactNode} props.children
 * @param {string} props.className
 * @returns {JSX.Element}
 */
export default function SidebarItemGroup({ children, className }) {
  return (
    <div
      id="sidebar-item-group"
      className={`flex flex-col gap-2 rounded-md ` + className}
    >
      {children}
    </div>
  );
}
