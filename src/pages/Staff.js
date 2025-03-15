import { useEffect, useState } from "react";

import data from "../data.json"

import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import DoctorsTable from "../components/DoctorsTable";

export default function Staff() {

    const [isLoading, setIsLoading] = useState(true);
    const [allDoctors, setAllDoctors] = useState([]);
    const [filterText, setFilterText] = useState('');

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

    return (
        <>
            {
                isLoading ? <Loader /> : 
                    <div className="StaffBody">
                        <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
                        <DoctorsTable doctors={allDoctors} filterText={filterText}/>
                    </div>
            }
        </>
    );
}