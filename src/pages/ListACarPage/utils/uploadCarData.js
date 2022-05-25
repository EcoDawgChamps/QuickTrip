const uploadCarData = async (url, body) => {
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    })
}

export default uploadCarData;