import React, { useState } from "react";
import omlet from "../assets/Images/eggs-omelet.png";

const ListItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(!item.collapsed);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className={`ml-4 border ${
        isOpen ? "border-orange-500 bg-white" : "border-gray-300 bg-orange-500"
      } shadow-md p-4 rounded-md transition-colors duration-300 mb-5 flex justify-center items-center flex-col`}
    >
      <div
        className="cursor-pointer flex items-center space-x-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {hasChildren && (
          <span className="text-lg  font-bold">{isOpen ? "-" : "+"}</span>
        )}
        <span className="text-gray-700 text-center font-semibold">
          {item.name}
        </span>
      </div>
      {hasChildren && isOpen && (
        <div className="ml-4 mt-2">
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const CollapsibleList = ({ data }) => {
  return (
    <div className="p-4">
      {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
};

const initialTreeData = [
  {
    name: "Board Of Directors/CEO",
    children: [
      {
        name: "Operation Department",
        collapsed: true,
        children: [
          {
            name: "Invoicing and Dispatch",
            children: [
              { name: "Drivers" },
              { name: "Associates" },
              { name: "Delivery Executive" },
            ],
          },
          { name: "Inventory Management" },
          { name: "Reconciliation" },
        ],
      },
      {
        name: "Finance Department",
        collapsed: true,
        children: [
          { name: "Company Expenses" },
          { name: "Accounts", children: [{ name: "CA and Bank Functions" }] },
        ],
      },
      {
        name: "HR Department",
        collapsed: true,
        children: [
          { name: "HR Operations" },
          { name: "HR Manager" },
          { name: "HR Associates" },
        ],
      },
      {
        name: "Purchase Department",
        collapsed: true,
        children: [
          { name: "Purchase Operations" },
          { name: "Purchase Manager" },
          { name: "Purchase Associates" },
        ],
      },
      {
        name: "Outlet Department",
        collapsed: true,
        children: [
          { name: "Store Operations" },
          { name: "Store Manager" },
          { name: "Store Executive" },
          { name: "Delivery Executive" },
        ],
      },
    ],
  },
];

const Founder = () => {
  return (
    <div
      className="relative min-h-screen w-full flex flex-col px-12 items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fef9e7 0%, #f7f2e4 100%)",
      }}
    >
      <div
        className="absolute inset-y-0 right-0 top-32 w-96 h-64 bg-cover bg-opacity-90 bg-left bg-no-repeat"
        style={{ backgroundImage: `url(${omlet})` }}
      ></div>

      <h1 className="text-3xl font-bold mb-8 mt-60 text-center relative">
        KACKLEWALLS NUTRITION PVT LIMITED
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-8 border-l-4 border-orange-500"></div>
      </h1>

      <div className="text-center mb-12 relative">
        <div className="font-bold text-xl cursor-default relative">
          Board Of Directors/CEO
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-6 border-l-4 border-orange-500"></div>
        </div>
      </div>

      {/* Flex column for <md and flex row for >=md */}
      <div className="relative overflow-x-auto md:overflow-visible w-full max-w-full px-4">
        <div className="flex flex-col xl:flex-row  xl:justify-around  xl:space-x-0 space-y-4  xl:space-y-0 relative overflow-x-auto xl:overflow-visible">
          {initialTreeData[0].children.map((department, index) => (
            <div
              key={index}
              className={`text-center relative mb-8 xl:mb-0 ${
                index === initialTreeData[0].children.length - 1
                  ? "xl:mr-8"
                  : ""
              }`}
            >
              <div
                className={`absolute transform -translate-x-1/2
                xl:left-1/2 xl:-top-5 xl:h-8 xl:w-0.5 xl:border-l-4
                -left-5 top-1/2  h-0.5 w-20 border-t-4
                border-orange-500
                xl:border-t-0`}
              ></div>
              <ListItem item={department} />
            </div>
          ))}
          {/*  line  */}

          <div className="absolute left-0  top-0 bottom-0 xl:-top-5 xl:left-16 xl:right-0 xl:bottom-auto xl:h-0.5 w-0.5  xl:w-11/12 bg-orange-500 transform xl:-translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
