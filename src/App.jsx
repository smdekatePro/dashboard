import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { useState } from "react";
import employeeData from "./data/employee.json";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import EmployeeList from "./components/EmployeeList";

// Register AG Grid Modules
ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const employees = employeeData.employees;

  // Filter employees by department
  const filteredEmployees = selectedDepartment
    ? employees.filter((emp) => emp.department === selectedDepartment)
    : employees;

  // Dashboard summary cards data
  const totalEmployees = filteredEmployees.length;
  const activeEmployees = filteredEmployees.filter((e) => e.isActive).length;
  const avgSalary = Math.round(
    filteredEmployees.reduce((sum, e) => sum + e.salary, 0) / totalEmployees
  );
  const departments = [...new Set(employees.map((e) => e.department))];

  return (
    <div className="fixed inset-0 flex bg-gray-50">
      <Sidebar
        departments={departments}
        selectedDepartment={selectedDepartment}
        onDepartmentSelect={setSelectedDepartment}
      />
      <div className="flex-1 flex flex-col h-screen overflow-auto">
        <Header />
        <SummaryCards
          totalEmployees={totalEmployees}
          activeEmployees={activeEmployees}
          avgSalary={avgSalary}
          departments={selectedDepartment ? [selectedDepartment] : departments}
        />
        <EmployeeList rowData={filteredEmployees} />
      </div>
    </div>
  );
}

export default App;
