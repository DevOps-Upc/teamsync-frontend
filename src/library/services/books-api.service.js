import http from "../../shared/services/http-common.js";

/**
 * BooksApiService class
 * @description Service class for making HTTP requests to the API
 */

export class BooksApiService {
    /**
     * Get all books
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getAll() {
        return http.get('/books');
    }

    /**
     * Get book by id
     * @param id
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    getById(id) {
        return http.get(`/books/${id}`);
    }

    /**
     * Create a new book
     * @param bookResource - tutorial object to create
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    create(bookResource) {
        return http.post('/books', bookResource);
    }

    /**
     * Update a book
     * @param id - book id to update
     * @param bookResource - tutorial object with data
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    update(id, bookResource) {
        return http.put(`/books/${id}`, bookResource);
    }

    /**
     * Delete a book
     * @param id - book id to delete
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    delete(id) {
        return http.delete(`/books/${id}`);
    }

    /**
     * Delete all books that match the given title
     * @param title - book title to apply as criteria
     * @returns {Promise<axios.AxiosResponse<any>>}
     */
    findByTitle(title) {
        return http.get(`/books?title=${title}`);
    }
}