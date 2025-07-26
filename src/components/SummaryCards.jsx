function SummaryCards({
  totalEmployees,
  activeEmployees,
  avgSalary,
  departments,
}) {
  return (
    <section className="flex gap-6 mb-8 justify-center">
      <div className="bg-white rounded-lg shadow-md px-8 py-6 min-w-[180px] text-center">
        <h3 className="m-0 text-lg font-semibold text-blue-600">
          Total Employees
        </h3>
        <p className="text-4xl font-bold mt-2">{totalEmployees}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md px-8 py-6 min-w-[180px] text-center">
        <h3 className="m-0 text-lg font-semibold text-blue-600">
          Active Employees
        </h3>
        <p className="text-4xl font-bold mt-2">{activeEmployees}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md px-8 py-6 min-w-[180px] text-center">
        <h3 className="m-0 text-lg font-semibold text-blue-600">Avg. Salary</h3>
        <p className="text-4xl font-bold mt-2">${avgSalary.toLocaleString()}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md px-8 py-6 min-w-[180px] text-center">
        <h3 className="m-0 text-lg font-semibold text-blue-600">Departments</h3>
        <p className="text-xl font-medium mt-2">{departments.join(", ")}</p>
      </div>
    </section>
  );
}

export default SummaryCards;
