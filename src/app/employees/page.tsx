import EmployeeList from "@/frontendComponents/employeeList";
import Link from "next/link";

export default function EmployeesPage(){
    return(
        <>
            <Link href={"./admin"}>Manage employees...</Link>
            <EmployeeList></EmployeeList>
        </>
    )
}