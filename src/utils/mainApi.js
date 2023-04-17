const BASE_URL = 'http://localhost:4000'
function getResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject({message: err.message, status: res.status}))
}

export const uploadImage = (fileData) => {
  let data = new FormData();
  data.append('avatar', fileData);
  // console.log(data)
  // console.log(fileData)
  // data.append('name', fileData.name)
  return fetch(`${BASE_URL}/upload`, {
    method: 'POST',
    headers: {
      'encType': 'multipart/form-data',
    },
    body: data,
  })
  .then((res) => {
    return getResponse(res)
  });
}

export const saveProfile = (name, imageId) => {
    return fetch(`${BASE_URL}/profile`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, imageId})
  })
  .then((res) => {
    // console.log(res) // Response {type: 'cors', url: 'https://auth.nomoreparties.co/signup', redirected: false, status: 201, ok: true,
    return getResponse(res)
  })
};

export const getAllUsers = () => {
  return fetch(`${BASE_URL}/profile`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((res) => getResponse(res))
};

export const getCurrentUser = (imageId) => {
  return fetch(`${BASE_URL}/upload/${imageId}`, {
    method: 'GET',
    headers: {
      'encType': 'multipart/form-data',
    },
  })
  .then((res) => {

    return res.ok ? res.blob() : res.json().then((err) => Promise.reject({message: err.message, status: res.status})) // возвращает res.body а не JSON
  })
}
