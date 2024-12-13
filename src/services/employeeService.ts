export const fetchEmployees = async () => {
    const response = await fetch("/api/employees");
    if (!response.ok) {
        throw new Error("Failed to fetch departments");
    }
    return response.json();
};