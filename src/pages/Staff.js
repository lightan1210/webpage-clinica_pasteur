import { useEffect, useState } from "react";

import logo from '../images/logo.png'
import Loader from "../components/Loader";

export default function Staff() {

    const [isLoading, setIsLoading] = useState(true);
    const [allDoctors, setallDoctors] = useState([]);

    async function fetchData() {
        // try {
        //     const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

        //     if (response.ok) {
        //         const doctors = await response.json();
        //         console.log(doctors);
        //         setIsLoading(false);
        //     } else {
        //     }
        // } catch (error) {
        // }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
            {
                isLoading ? <Loader /> : 
                    <div className="DoctorsData">
                        {
                            allDoctors.map( (doctor) => (
                                <div className="Doctor" key={doctor.id}>HOLA</div>
                            ))
                        }
                    </div>
            }
        </>
    );
}