import axios from 'axios';

export default class CardService {
	static async getAll() {

		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
			return response.data
		} catch (error) {
			console.log(error)
		}
	}
}