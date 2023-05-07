const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create object with name, id, email, github", () => {
            const engineer = new Engineer('James Sullivan', 123, 'sulley@mail.com', 'Sulley');

            expect(engineer.name).toEqual(expect.any(String));
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toEqual(expect.any(String));
            expect(engineer.github).toEqual(expect.any(String));
        });
    });

    describe('githubValue', () => {
        it("should get the value of engineer's github", () => {
            const engineer = new Engineer('James Sullivan', 123, 'sulley@mail.com', 'Sulley');

            expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
        });
    });

    describe('getRole', () => {
        it("should return engineer's role", () => {
            const engineer = new Engineer('James Sullivan', 123, 'sulley@mail.com', 'Sulley');

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});