
const log = console.log
const apiUrl = "http://localhost:3000/";

// GET method 
const getData = async () => {
    try {
        const result = await fetch(apiUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await result.json();
        log("Result:", data);
        return data;
    } catch (err) {
        log("Error:", err);
    }
};

// POST method 
const postData = async (toDo) => {
    try {
        const result = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "description": toDo })
        });
        const data = await result.json();
        log("Result:", data);
        return data;
    } catch (err) {
        log("Error:", err);
    };
};

// PUT method
const updateData = async (toDo) => {
    try {
        const result = await fetch(`${apiUrl}${toDo._id}`, {
            method: "PUT",
            redirect: "follow",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toDo)
        });
        const data = await result.json();
        log("Result:", data);
        return data
    } catch (err) {
        log("Error:", err);
    };
};

//DELETE method
const deleteData = async (id) => {
    await fetch(`${apiUrl}${id}`, {
        method: "DELETE"
    });
};