import { login, logout } from '../../actions/auth'


test('should gernerate login action object', () => {
    const action = login('123abc')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123abc'
    })
})

test('should gernerate logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})