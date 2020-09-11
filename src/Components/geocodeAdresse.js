import axios from 'axios'

const geocodeAdresse = (address) => {
	address = address.replace(/é|è|ê/g,"e");

	return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address="+ address +"&region=fr&key=" + process.env.REACT_APP_GOOGLE_MAPS_KEY)
	.then (res=>{
		const results = res.data.results[0];

		let id = results.place_id; // id de la position unique
		let adresse = results.formatted_address; //adresse formated
		let latitude = results.geometry.location.lat; // lat
		let longitude = results.geometry.location.lng; //lng
		let result = {
			'id':id,
			'adresse':adresse,
			'lat':latitude,
			'lng':longitude
		};
		return result;
	})
}
export default geocodeAdresse;