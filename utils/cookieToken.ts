import getJwtToken from './jwtToken';

const cookieToken = (id: string) => {
    return `token=${getJwtToken(id)}; expires=${new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
    )}; httpOnly; path=/`;
}

export default cookieToken;