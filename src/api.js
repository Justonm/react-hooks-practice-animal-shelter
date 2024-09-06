const API_URL = "http://localhost:3001/pets"; // Ensure this matches your json-server URL

// Fetch pets based on type (all, cat, dog, micropig)
export async function fetchPets(type = "all") {
    let endpoint = API_URL;

    if (type !== "all") {
        endpoint += `?type=${type}`;
    }

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error("Failed to fetch pets");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching pets:", error);
        return [];
    }
}
