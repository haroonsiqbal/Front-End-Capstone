const remoteURL = "http://localhost:5002"

export default {
    
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
    },

    getAll() {
        return fetch(`${remoteURL}/locations`).then(result => result.json())
    },

    getFiltered(neighborhood, outlets) {
        return fetch(`${remoteURL}/locations?neighborhood=${neighborhood}&outlets>=${outlets}`).then(result => result.json())
    }, 
    
    delete(id) {
        return fetch(`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
    },
  
    post(newLocation) {
        return fetch(`${remoteURL}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        }).then(data => data.json())
    },

    fav(newUserLocation) {
        return fetch(`${remoteURL}/usersLocations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserLocation)
        }).then(data => data.json())
    },

    getFavs(userId) {
        return fetch(`${remoteURL}/users/${userId}?_embed=usersLocations`).then(result => result.json())
    },

    update(editedLocation) {
        return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedLocation)
        }).then(data => data.json());
    }
}