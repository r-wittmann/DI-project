export const loginBackend = async (username, password) => {
    const response = await fetch("http://localhost:5555/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}
            )
        }
    );
    const json = await response.json()

    if (response.ok) {
        window.localStorage.setItem("token", json.token);
    } else {
        console.log(json);
    }

    return response.ok;
}
