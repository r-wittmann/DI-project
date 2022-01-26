const getToken = () => {
    return window.localStorage.getItem("token");
}

export const getItemsBackend = async () => {
    const token = getToken();
    const response = await fetch("http://localhost:5555/items", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        }
    );
    return await response.json();
}
