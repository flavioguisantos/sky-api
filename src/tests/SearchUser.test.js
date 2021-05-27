const cnn = require('../data-access/dalMongo')

test('Verifica a função de SearchUser na dalMongo ', async () => {
    const result = await cnn.SearchUser({
        email: 'flavio.guilherme@outlook.com.br'
    })
    expect(result.email).toBe('flavio.guilherme@outlook.com.br')
})
