import { DataGrid, QuickFilter } from '@mui/x-data-grid';
import { Paper } from '@mui/material';
import { useState } from 'react';

function CustomTable(data, filterBy) {

    const columns = Object.keys(data.data[0]).map((key) => ({
        field: key, headerName: key, flex: 1
    }));

    const paginationModel = { page: 0, pageSize: 20 };

    const [filterModel, setFilterModel] = useState({ items: [] })

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <QuickFilter>
</QuickFilter>;
            <DataGrid
                rows={data.data}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[20, 50, { value: -1, label: 'Alle' }]}
                checkboxSelection
                sx={{ border: 0 }}
                getRowId={(row) => row.Name}
                filterModel={filterModel}
                onFilterModelChange={() => setFilterModel({ items: [{ field: data.filterBy, operator: 'equals', value: 'Land' }] })}
            />
        </Paper>
    )
}

export default CustomTable;