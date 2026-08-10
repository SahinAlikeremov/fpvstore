const API_URL = "http://localhost:8080/api/products";

export async function getProducts() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Products could not be loaded");
    }

    return response.json();
}

export async function getProduct(id) {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Product could not be loaded");
    }

    return response.json();
}

export async function createProduct(product) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Product could not be created");
    }

    return response.json();
}

export async function updateProduct(id, product) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if (!response.ok) {
        throw new Error("Product could not be updated");
    }

    return response.json();
}

export async function deleteProduct(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Product could not be deleted");
    }
}