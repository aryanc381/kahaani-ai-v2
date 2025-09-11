import { atom } from 'recoil';

export const userInfo = atom({
    key: 'userInfo',
    default: {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    }
});