export default function DoctorsTable({ doctors, filterText }) {
    return(
        <table className="DoctorsTable">
            <tbody>

            <tr className="TableHeader">
                <th>Nombre completo</th>
                <th>Especialidad</th>
                <th>Lugar de trabajo</th>
            </tr>
            {
                doctors.map(doctor => {
                    if(doctor.fullname.toUpperCase().indexOf(filterText.toUpperCase()) !== -1 ||
                    doctor.speciality.toUpperCase().indexOf(filterText.toUpperCase()) !== -1 ||
                    doctor.workplace.toUpperCase().indexOf(filterText.toUpperCase()) !== -1) {
                        {console.log(doctor)}
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