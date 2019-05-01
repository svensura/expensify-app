import moment from 'moment';

export default [{
    id: '1',
    description: 'MacBook Pro 13',
    note: 'A new MacBook Pro 13',
    amount: 6000,
    createdAt: 0
}, {
    id: '2',
    description: 'iPhone XS',
    note: 'A new iPhoneXS',
    amount: 5000,
    createdAt: moment(0).add(2, 'months').valueOf()
}, {
    id: '3',
    description: 'Xiaomi Mi Air 13',
    note: 'A new Xiaomi Mi Air 13',
    amount: 4000,
    createdAt: moment(0).subtract(4, 'months').valueOf()
}];