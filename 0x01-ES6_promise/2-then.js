export default function handleResponseFromAPI(promise){
    return  promise
    .then(() => ({status: 200, body: 'sucess'}))
    .catch(() => new Error())
    .finally(() => console.log('Got a responce from the API'))

}