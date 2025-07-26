import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const EmployeeTable = ({ employees }) => {
  const columnDefs = [
    { field: 'name', headerName: 'Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'department', headerName: 'Department' },
    { field: 'position', headerName: 'Position' },
  ]

  return (
    <div className="ag-theme-alpine w-full h-[600px]">
      <AgGridReact
        rowData={employees}
        columnDefs={columnDefs}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
        }}
      />
    </div>
  )
}

export default EmployeeTable