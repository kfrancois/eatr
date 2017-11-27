let Request = require('request');

describe('server', () => {
    let server;
    let recipeId;

    beforeAll(() => {
        server = require('../app.js');

    });

    describe('POST /API/recipes', () => {
        let data = {};

        afterAll(() => {
            // ... 
        });
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: 'http://localhost:3000/API/recipes',
                json: true,
                body: {
                    "name": "spaghetti"
                }
            }, (error, res, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.VALID_TOKEN); // TODO token maken in app-env.spec
        });
        it('recipe body)', () => {
            expect(data.body.id).toBeDefined();
            expect(data.body.name).toBe('spaghetti');
            expect(data.body.ingredients.length).toBe(0);
        });
        it('status 200', () => {
            expect(data.status).toBe(200);
        });
    });

    describe('GET /API/recipes', () => {
        let data = {};
        beforeAll((done) => {
            Request.get(`http://localhost:3000/API/recipes`,
                (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = JSON.parse(body);
                    done();
                }).auth(null, null, true, process.env.VALID_TOKEN);
        });

        it("status 200", () => {
            expect(data.statusCode).toBe(200);
        });
        it("check recipes", () => {
            expect(data.body.length).toBe(1);
            let recipe = data.body[0];
            // other test
        });
    });

    describe('DELETE /API/recipe', () => {
        let data = {};
        beforeAll((done) => {
            Request.delete(`http://localhost:3000/API/recipe/${recipeId}`,
                (error, response, body) => {
                    data.status = response.statusCode;
                    done();
                });
        });

        it('status 200', () => {
            expect(data.status).toBe(200);
        });
    });

    describe('GET /API/recipes', () => {
        let data = {};
        beforeAll((done) => {
            Request.get(`http://localhost:3000/API/recipes`,
                (error, response, body) => {
                    data.status = response.statusCode;
                    data.body = JSON.parse(body);
                    done();
                }).auth(null, null, true, process.env.VALID_TOKEN);
        });

        it("status 200", () => {
            expect(data.statusCode).toBe(200);
        });
        it("check recipes", () => {
            expect(data.body.length).toBe(0);
        });
    });

});