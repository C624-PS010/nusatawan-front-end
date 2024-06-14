/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const DataTable = ({ columns, data, actions, buttonStyles }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 border">
                {column}
              </th>
            ))}
            {actions && <th className="py-2 px-4 border">Actions</th>}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border">
                  {row[column.toLowerCase()]}
                </td>
              ))}
              {actions && (
                <td className="py-2 px-4 border flex justify-center">
                  {actions.map((action, actionIndex) => (
                    <button
                      key={actionIndex}
                      onClick={() => action.onClick(row.id)}
                      className={`${
                        buttonStyles[actionIndex] || "bg-blue-500"
                      } text-white px-4 py-2 rounded mr-2`}
                    >
                      {action.label}
                    </button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
