export const fetchDepartments = async () => {
    const response = await fetch("/api/departments");
    if (!response.ok) {
        throw new Error("Failed to fetch departments");
    }
    return response.json();
};
