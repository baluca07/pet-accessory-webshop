"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {fetchEmployees} from "@/services/employeeService";

export default function EmployeeList() {
    const [employees, setEmployees] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeesData = await fetchEmployees();
                setEmployees(employeesData); // Update the state with fetched data
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
            <h1>Employees</h1>
            {employees.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Department</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.department.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>There are no employees.</p>
            )}
            <Link href={"/"}>Go to home page...</Link>
        </div>
    );
}
