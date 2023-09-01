import React from "react";

export interface TableProps {
  label: string;
}

const GenericTableComponent = (props: TableProps) => {
  return (
    <table>
      <tr>
        <th>{props.label}</th>
        <th>{props.label}</th>
        <th>{props.label}</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  );
};

export default GenericTableComponent;
