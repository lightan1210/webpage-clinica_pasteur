import { useState } from "react";

export default function DoctorsTable({ doctors, filterText }) {

    const [tempDoctors, setTempDoctors] = useState(doctors);
    const [order, setOrder] = useState({ column: null, direction: 'asc'});

    const sortTable = (column) => {
        const newDirection = order.column == column && order.direction == 'asc' ? 'desc' : 'asc';
        
        const sortedDoctors = [...tempDoctors].sort((a,b) => {
            if(a[column] < b[column]) return newDirection === 'asc' ? -1 : 1;
            if(a[column] > b[column]) return newDirection === 'asc' ? 1 : -1;
            return 0;
        })

        setTempDoctors(sortedDoctors);
        setOrder({column, direction: newDirection});
    };

    return(
        <table className="DoctorsTable">
            <tbody>

            <tr className="TableHeader">
                <th onClick={() => sortTable('fullname')}>Nombre completo {order.column === 'fullname' && (order.direction === 'asc' ? '↓' : '↑')}</th>
                <th onClick={() => sortTable('speciality')}>Especialidad {order.column === 'speciality' && (order.direction === 'asc' ? '↓' : '↑')}</th>
                <th onClick={() => sortTable('workplace')}>Lugar de trabajo {order.column === 'workplace' && (order.direction === 'asc' ? '↓' : '↑')}</th>
            </tr>
            {
                tempDoctors.map(doctor => {
                    if(doctor.fullname.toUpperCase().indexOf(filterText.toUpperCase()) !== -1 ||
                    doctor.speciality.toUpperCase().indexOf(filterText.toUpperCase()) !== -1 ||
                    doctor.workplace.toUpperCase().indexOf(filterText.toUpperCase()) !== -1) {
                        return(
                            <tr className="Doctor" key={doctor.id}>
                                <td className="NameDoctor">{doctor.fullname}</td>
                                <td className="SpecialityDoctor">{doctor.speciality}</td>
                                <td className="WorkplaceDoctor">{doctor.workplace}</td>
                            </tr>
                        )
                    };
                })
            }
            </tbody>
        </table>
    );
}