import { useEffect, useState } from "react";

import data from "../data.json"

import Loader from "../components/Loader";

export default function Staff() {

    const [isLoading, setIsLoading] = useState(true);
    const [allDoctors, setAllDoctors] = useState([]);
    const [filterTable, setFilterTable] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

            if (response.ok) {
                const doctors = await response.json();
                console.log(doctors);
                console.log(data);
                setIsLoading(false);
            } else {
            }
        } catch (error) {
        }
    }

    async function getDataFromJSON() {
        try {
            setAllDoctors(data);
            setIsLoading(false);
        }
        catch {}
    }

    useEffect(() => {
        getDataFromJSON();
    },[]);

    useEffect(() => {

        if(filterTable == null)
            return;

        let filter, table, tr, td, i, j, txtValue, found;
        filter = filterTable.toUpperCase();
        table = document.getElementsByClassName("DoctorsData")[0];
        tr = table.getElementsByClassName("Doctor");
        for (i = 0; i < tr.length; i++) {
            found = false;
            
            td = tr[i].getElementsByTagName("td");
            for (j = 0; j < td.length && !found ; j++) {

                if (td[j]) {
                    txtValue = td[j].textContent || td[j].innerText;
                    
                    found = found || (txtValue.toUpperCase().indexOf(filter) > -1);
                }
            }

            if (found) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }, [filterTable]);

    return (
        <>
            {
                isLoading ? <Loader /> : 
                    <>
                        <input type="text" placeholder="Buscar..." className="FilterTable" onChange={(e) => setFilterTable(e.target.value)}></input>
                        <table className="DoctorsData">
                            <tbody>

                            <tr className="TableHeader">
                                <th>Nombre completo</th>
                                <th>Especialidad</th>
                                <th>Lugar de trabajo</th>
                            </tr>
                            {
                                allDoctors.map( (doctor) => (
                                    <tr className="Doctor" key={doctor.id}>
                                        <td className="NameDoctor">{doctor.fullname}</td>
                                        <td className="SpecialityDoctor">{doctor.speciality}</td>
                                        <td className="WorkplaceDoctor">{doctor.workplace}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </>
            }
        </>
    );
}