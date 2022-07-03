import axios from 'axios';

export default class CardService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
			params: {
				_limit: limit,
				_page: page,
			}
		})
		return response
	}
}