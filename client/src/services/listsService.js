const getToken = () => {
    return window.localStorage.getItem("token");
}

export const getListsBackend = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:5555/lists", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
    );
    return await response.json();
}

export const addListBackend = async (listName) => {
    const token = getToken();
    const response = await fetch("http://localhost:5555/lists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({listName})
        }
    );
    return response.ok;
}

export const removeListBackend = async (listId) => {
    const token = getToken();
    const response = await fetch("http://localhost:5555/lists/" + listId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        }
    );
    return response.ok;
}

export const getListBackend = async (listId) => {
    const token = getToken();
    const response = await fetch("http://localhost:5555/lists/" + listId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
    );
    return await response.json();
}
