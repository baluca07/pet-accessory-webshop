"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {fetchDepartments} from "@/services/departmentService";


export default function DepartmentsPage() {
    // Define state to hold the departments
    const [departments, setDepartments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const departmentsData = await fetchDepartments();
                setDepartments(departmentsData); // Update the state with fetched data
            } catch (error) {
                console.error("Error fetching departments:", error);
            } finally {
                setLoading(false); // Set loading to false once data is fetched
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>; // Show loading message while fetching data

    return (
        <div>
            <h1>Departments</h1>
            {departments.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {departments.map((dep) => (
                        <tr key={dep.id}>
                            <td>{dep.id}</td>
                            <td>{dep.name}</td>
                            <td>{dep.location}</td>
                            <td>{dep.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>There are no departments.</p>
            )}
            <Link href={"/"}>Go to home page...</Link>
        </div>
    );
}
