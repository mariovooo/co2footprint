import { DataGrid } from '@mui/x-data-grid';
import { Paper,Grid } from '@mui/material';
import { useState } from 'react';
import TableChart from './TableChart'

function CustomTable(data) {

    const columns = Object.keys(data.data[0]).map((key) => ({
        field: key, headerName: key, flex: 1
    }));

    const paginationModel = { page: 0, pageSize: 20 };

    const [handleSelectionChange, setSelectionHandleChange] = useState(Object)

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Paper sx={{ height: 400, width: '100%' }}>

                        <DataGrid
                            rows={data.data}
                            columns={columns}
                            initialState={{
                                pagination: { paginationModel }
                            }}
                            pageSizeOptions={[20, 50, { value: -1, label: 'Alle' }]}
                            checkboxSelection
                            onRowSelectionModelChange={(newRowSelectionModel) => {
                                if (newRowSelectionModel.ids.size) {
                                    setSelectionHandleChange(newRowSelectionModel)
                                } else {
                                    setSelectionHandleChange(data.data)
                                }
                            }}
                            sx={{ border: 0 }}
                            getRowId={(row) => row.Name}
                            showToolbar
                        />
                    </Paper>
                </Grid>
                <Grid size={12}>
                    <TableChart data={data.data} handleSelectionChange={handleSelectionChange} />
                </Grid>
            </Grid>
        </>
    )
}

export default CustomTable;