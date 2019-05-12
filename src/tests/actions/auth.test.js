import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { login, logout } from '../../actions/auth'


test('should login', () => {
    const action = login('123abc')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    })
})

test('should logout', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})