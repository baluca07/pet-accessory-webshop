export const fetchEmployees = async () => {
    const response = await fetch("/api/employees");
    if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        throw new Error(`Failed to fetch employees: ${errorDetails.error || response.statusText}`);
    }
    return response.json();
};