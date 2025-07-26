import { useMemo } from "react";
import EmployeeTable from "./EmployeeTable";

function EmployeeList({ rowData }) {
  const columnDefs = useMemo(
    () => [
      {
        headerName: "Status",
        field: "isActive",
        valueGetter: (params) => (params.data.isActive ? "Active" : "Inactive"),
        cellClass: (params) =>
          params.value === "Active" ? "text-green-600" : "text-red-600",
      },
      { headerName: "First Name", field: "firstName" },
      { headerName: "Last Name", field: "lastName" },
      { headerName: "Email", field: "email" },
      { headerName: "Department", field: "department" },
      { headerName: "Position", field: "position" },
      { headerName: "Salary", field: "salary" },
      { headerName: "Hire Date", field: "hireDate" },
      { headerName: "Age", field: "age" },
      { headerName: "Location", field: "location" },
      { headerName: "Performance Rating", field: "performanceRating" },
      { headerName: "Projects Completed", field: "projectsCompleted" },
      {
        headerName: "Skills",
        field: "skills",
        valueGetter: (params) => params.data.skills?.join(", "),
      },
      { headerName: "Manager", field: "manager" },
    ],
    []
  );

  return (
    <div className="max-w-7xl w-full mx-auto px-8 pb-8 flex-1">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 m-0">
          Employee Records
        </h2>
        <p className="text-gray-600 mt-2">
          View and manage employee information
        </p>
      </div>
      <EmployeeTable rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
}

export default EmployeeList;
