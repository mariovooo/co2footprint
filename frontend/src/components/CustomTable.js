import { DataGrid, QuickFilter } from '@mui/x-data-grid';
import { Paper } from '@mui/material';

function CustomTable(data) {

    const columns = Object.keys(data.data[0]).map((key) => ({
        field: key, headerName: key, flex: 1
    }));

    const paginationModel = { page: 0, pageSize: 20 };

    return (
        <Paper sx={{ height: 400, width: '100%' }}>

            <DataGrid
                rows={data.data}
                columns={columns}
                initialState={{
                    pagination: { paginationModel }
                }}
                pageSizeOptions={[20, 50, { value: -1, label: 'Alle' }]}
                checkboxSelection
                sx={{ border: 0 }}
                getRowId={(row) => row.Name}
                showToolbar
            />
        </Paper>
    )
}

export default CustomTable;