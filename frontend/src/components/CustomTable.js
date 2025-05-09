import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@mui/material';
import { useState } from 'react';
import TableChart from './TableChart'

function CustomTable({data}) {

    const columns = Object.keys(data[0]).map((key) => ({
        field: key, headerName: key, flex: 1
    }));

    const paginationModel = { page: 0, pageSize: 10 };

    const [handleSelectionChange, setSelectionHandleChange] = useState(Object)

    return (
        <>
            <Grid container spacing={2}>
            <Grid size={12}>
                    <TableChart data={data} handleSelectionChange={handleSelectionChange} />
                </Grid>
                <Grid size={12}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            initialState={{
                                pagination: { paginationModel }
                            }}
                            pageSizeOptions={[10, 25, 50, { value: -1, label: 'Alle' }]}
                            checkboxSelection
                            onRowSelectionModelChange={(newRowSelectionModel) => {
                                if (newRowSelectionModel.ids.size) {
                                    setSelectionHandleChange(newRowSelectionModel)
                                } else {
                                    setSelectionHandleChange(data)
                                }
                            }}
                            sx={{ border: 0 }}
                            getRowId={(row) => row.Name}
                            showToolbar
                        />
                </Grid>
            </Grid>
        </>
    )
}

export default CustomTable;