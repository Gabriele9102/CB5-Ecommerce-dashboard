const Url = "https://api.escuelajs.co/api/v1/"



export const GET =  (type, id = "") => {
    return fetch(Url + type + id)
            .then(res => res.json())

}


