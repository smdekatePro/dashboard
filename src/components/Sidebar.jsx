function Sidebar({ departments, selectedDepartment, onDepartmentSelect }) {
  return (
    <aside className="w-56 bg-gray-900 text-white py-8 flex flex-col items-center shadow-md h-screen z-10">
      <h2 className="text-2xl font-bold mb-8">Company</h2>
      <nav className="w-full">
        <ul className="list-none p-0 m-0">
          <li
            className={`py-3 text-center font-medium cursor-pointer rounded-md mb-3 mx-4 ${
              !selectedDepartment ? "bg-blue-600" : "hover:bg-gray-800"
            }`}
            onClick={() => onDepartmentSelect(null)}
          >
            All Departments
          </li>
          {departments.map((dept) => (
            <li
              key={dept}
              className={`py-3 text-center font-medium cursor-pointer rounded-md mb-3 mx-4 ${
                selectedDepartment === dept
                  ? "bg-blue-600"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => onDepartmentSelect(dept)}
            >
              {dept}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
