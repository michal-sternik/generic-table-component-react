import React, { useEffect, useState } from "react";
import "./GenericTableComponent.css";
import "font-awesome/css/font-awesome.min.css";

export interface GenericTableProps<T extends Record<string, any>> {
  data: T[];
}

function GenericTableComponent<T extends Record<string, any>>({
  data,
}: GenericTableProps<T>): JSX.Element {
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // useEffect(() => {
  //   debugger;
  const handleSort = (columnName: string) => {
    if (sortColumn === columnName) {
      if (sortOrder === "asc") {
        setSortOrder("desc");
      } else setSortOrder("asc");
      // Jeśli wybrano inną kolumnę, ustal ją jako kolumnę do sortowania i domyślnie ustaw sortowanie rosnące
    } else {
      setSortColumn(columnName);
      setSortOrder("asc");
    }
  };

  // }, [sortColumn]);
  const sortedData = [...data].sort((a, b) => {
    // debugger;
    if (sortColumn) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];
      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  if (!data || data.length === 0) {
    return <div>No data to display</div>;
  }

  const columnNames = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((columnName, index) => {
            const isColumnSorted = sortColumn === columnName;
            const isAscending = isColumnSorted && sortOrder === "asc";

            return (
              <th key={index} onClick={() => handleSort(columnName)}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ padding: "10px" }}>{columnName}</div>
                  {isColumnSorted && (
                    <i
                      style={{ fontSize: "24px" }}
                      className={`fa fa-sort-${isAscending ? "asc" : "desc"}`}
                    />
                  )}
                  {!isColumnSorted && (
                    <i
                      style={{ fontSize: "24px", opacity: "0.3" }}
                      className="fa"
                    >
                      &#xf0dc;
                    </i>
                  )}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columnNames.map((columnName, colIndex) => (
              <td key={colIndex}>{item[columnName]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GenericTableComponent;
