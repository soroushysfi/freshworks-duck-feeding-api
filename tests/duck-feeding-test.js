const request = require('supertest')
const app = require('../src/app')
const DuckFeeding = require('../src/models/duck-feeding-model')

const duckFeedingInfo = {
    feedingTime: "2018-12-31",
    foodType: "test",
    duckCount: 10,
    foodAmount: 5,
    reOccurring: true 
}

beforeEach(async () => {
    await DuckFeeding.deleteMany({foodType: "test"})
    await new DuckFeeding(duckFeedingInfo).save()
})


test('Should get duck feeding information', async () => {
    await request(app)
    .get('/api/duck-feeding?limit=1')
    .expect(200)
})

test('Should create duck feeding information', async () => {
    await request(app)
    .post('/api/duck-feeding')
    .send(duckFeedingInfo)
    .expect(201)

    const result =  await DuckFeeding.find({foodType: "test"})
    expect(result.length).toBe(2)
})

test('Should not create duck feeding information', async () => {
    await request(app)
    .post('/api/duck-feeding')
    .send({
        foodType: "test"
    })
    .expect(500)
})