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
