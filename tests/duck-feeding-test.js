const request = require('supertest')
const app = require('../src/app')

test('Should get duck feeding information', async () => {
    await request(app)
    .get('/api/duck-feeding')
    .send({
        feedingTime: "2018-12-31",
        foodType: "this is food type",
        duckCount: 10,
        foodAmount: 5,
        reOccurring: true 
    })
    .expect(200)
})