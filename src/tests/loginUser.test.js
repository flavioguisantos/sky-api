const cnn = require('../data-access/dalMongo')

test('Verifica a função de loginUser na dalMongo ', async () => {
    const result = await cnn.loginUser({
        email: 'flavio.guilherme@outlook.com.br',
        senha: 1234
    })
    expect(result.email).toBe('flavio.guilherme@outlook.com.br')
})
