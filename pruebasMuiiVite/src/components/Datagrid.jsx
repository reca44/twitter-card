import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, esES } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'Nombre',
        headerName: 'Nombre',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Apellido',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Edad',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Nombre Completo',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', Nombre: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', Nombre: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', Nombre: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', Nombre: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', Nombre: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', Nombre: 'patacas', age: 150 },
    { id: 7, lastName: 'Clifford', Nombre: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', Nombre: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', Nombre: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
