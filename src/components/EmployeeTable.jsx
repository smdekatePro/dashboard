import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

function EmployeeTable({ rowData, columnDefs }) {
  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 150, // Increased minimum width for better column sizing
  };

  return (
    <div className="ag-theme-alpine h-[calc(100vh-280px)] w-full bg-white rounded-xl shadow-lg">
      <div style={{ height: "100%", width: "100%", overflow: "auto" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          rowHeight={48}
          pagination={true}
          enableCellTextSelection={true}
          suppressHorizontalScroll={false}
          suppressColumnVirtualisation={false}
          suppressScrollOnNewData={true}
        />
      </div>
    </div>
  );
}

export default EmployeeTable;
