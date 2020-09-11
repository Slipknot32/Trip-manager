import geocodeAdresse from './geocodeAdresse'
const geocodeAdresses = (addresses) => {

    const myPromises = [];
    for ( let i = 0; i < addresses.length; i++) {
        const myPromise = geocodeAdresse(addresses[i]);
        myPromises.push(myPromise)
    }
    return Promise.all(myPromises)
    .then (res =>{
        const totalResult = res;
        return totalResult
    })

}
export default geocodeAdresses;