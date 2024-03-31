import React from "react";

import { CiImageOn } from "react-icons/ci";
const selectedStyle = "";

/**
 * SidebarItem component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.icon - The icon element to be displayed.
 * @param {string} props.label - The label text to be displayed.
 * @param {boolean} props.selected - Indicates if the item is selected.
 * @param {string} props.selectedStyle - The CSS style to be applied when the item is selected.
 * @returns {JSX.Element} The rendered SidebarItem component.
 */
export default function SidebarItem({
  icon,
  label,
  selected = false,
  selectedStyle,
}) {
    let finalStyle = "";
    if(selected) {
        finalStyle += selectedStyle || 'text-potrello-blue-100'
    }

  return (
    <div
      id="sidebar-item"
      className="flex flex-col items-center w-full gap-1 py-2 justify-center rounded-lg opacity-65"
    >
      <div id="icon" className="flex items-center justify-center rounded-md">
        {icon ?? <CiImageOn />}
      </div>
      <p id="text" className="text-sm">
        {label}
      </p>
    </div>
  );
}
