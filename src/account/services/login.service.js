import http from '../../shared/services/http-common'
import {StatusCodes} from 'http-status-codes';
export default async function tryLogin(email, password) {
    try {
        const response = await http.get('/profiles?email=' + email + '&password=' + password);
        if (response.status !== StatusCodes.OK) throw new Error('Error logging in');
        if(response.data.length === 0) return null;
        const user = response.data[0];
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            personName: user.personName,
            rolProfile: user.rolProfile,
            email: user.email,
            photo: user.photo,
            membership: user.membership
        };
    } catch (e) {
        return null;
    }
}
