const API_URL = "http://localhost:3001/pets"; // Change to match json-server

// Fetch pets based on type (all, cat, dog, micropig)
export function fetchPets(type = "all") {
    let endpoint = API_URL;

    if (type !== "all") {
        endpoint += `?type=${type}`;
    }

    return fetch(endpoint)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch pets");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error("Error fetching pets:", error);
            return [];
        });
}
