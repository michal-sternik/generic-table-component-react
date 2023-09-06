import React from "react";
import "./NestedTableComponent.css";

function isPlainObject(obj: any) {
  return (
    typeof obj === "object" &&
    obj !== null &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

function renderRow<T extends Record<string, any>>(
  data: T,
  columnNames: string[]
) {
  return columnNames.map((columnName, colIndex) => (
    <React.Fragment key={colIndex}>
      {renderCell(data[columnName])}
    </React.Fragment>
  ));
}

function renderCell(value: any) {
  if (isPlainObject(value)) {
    const columnNames = Object.keys(value);
    return (
      <tr>
        {columnNames.map((columnName) => (
          <td>{value[columnName]}</td>
        ))}
      </tr>
    );
  } else if (typeof value === "object") {
    const columnNames = Object.keys(value[0]);
    return (
      <table>
        <thead>
          <tr>
            {columnNames.map((columnName, index) => (
              <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>{value.map((item: any) => renderCell(item))}</tbody>
      </table>
    );
  } else return <td>{value}</td>;
}

export interface NestedTableComponent<T extends Record<string, any>> {
  data: T[];
}

function NestedTableComponent<T extends Record<string, any>>({
  data,
}: NestedTableComponent<T>): JSX.Element {
  if (!data || data.length === 0) {
    return <div>No data to display</div>;
  }

  const columnNames = Object.keys(data[0]);
  return (
    <table>
      <thead>
        <tr>
          {columnNames.map((columnName, index) => (
            <th key={index}>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>{renderRow(item, columnNames)}</tr>
        ))}
      </tbody>
    </table>
  );
}

export default NestedTableComponent;
