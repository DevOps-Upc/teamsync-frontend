import http from '../../shared/services/http-common'
import {StatusCodes} from 'http-status-codes';
export default async function getAllBooks() {
    try {
        const response = await http.get('/books');
        if(response.data.length === 0) throw new Error('No books found');
        if(response.status !== StatusCodes.OK) throw new Error('Error getting books');
        return response.data;
    } catch(e) {
        console.log(e);
        throw e;
    };
}