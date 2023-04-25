import React, { useState, useMemo } from 'react'
import Datos from './Dates'
import MaterialReactTable from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'

function Tablebasic() {
    const [data, setData] = useState([]);

    const ref = Object.keys(data).map(key => (key))
    const meca = Object.keys(data).map(key => (data[key].mecalux))
    const odoo = Object.keys(data).map(key => (data[key].odoo))
    console.log(data)
    console.log(":::::", ref)
    console.log(meca)
    console.log(odoo)
    const columns = useMemo(
        () => [
            {
                accessorKey: ' ',
                header: 'Referencia',
                accessor: (row) => row,
            },
            {
                accessorKey: 'mecalux',
                header: 'Mecalux',
                accessor: (row) => row.mecalux?.join(', ') || 'No existe',
            },
            {
                accessorKey: 'odoo',
                header: 'Odoo',
                accessor: (row) => row.odoo?.join(', ') || 'No existe',
            },
        ],
        [],
    );
    return (
        <div>
            <Datos setData={setData} />
                <MaterialReactTable 
                    columns={columns} 
                    data={Object.values(data)} 
                    localization={MRT_Localization_ES} 
                />;
        </div>
    );
}

export default Tablebasic;


//

//     console.log(Datos.data)


// const data = [
//     {
//         Referencia: {
//             firstName: 'John',
//             lastName: 'Doe',
//         },
//         address: '261 Erdman Ford',
//     },
//     {
//         name: {
//             firstName: 'Jane',
//             lastName: 'Doe',
//         },
//         address: '769 Dominic Grove',
//     },
//     {
//         name: {
//             firstName: 'Joe',
//             lastName: 'Doe',
//         },
//         address: '566 Brakus Inlet',
//     },
//     {
//         name: {
//             firstName: 'Kevin',
//             lastName: 'Vandy',
//         },
//         address: '722 Emie Stream',
//     },
//     {
//         name: {
//             firstName: 'Joshua',
//             lastName: 'Rolluffs',
//         },
//         address: '32188 Larkin Turnpike',
//     },
// ];

// const Example = () => {
//     //should be memoized or stable
// };

// export default Example;
