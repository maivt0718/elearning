export const setLS = (key, value) => {
    const stringJSON = JSON.stringify(value)
    localStorage.setItem(key, stringJSON)
}

export const getLS = (key) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null
}

export const removeLS = (key) => {
    localStorage.removeItem(key) 
}

