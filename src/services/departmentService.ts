export const fetchDepartments = async () => {
    const response = await fetch("/api/departments");
    if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        throw new Error(`Failed to fetch departments: ${errorDetails.error || response.statusText}`);
    }
    return response.json();
};

