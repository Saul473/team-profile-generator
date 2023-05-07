const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create object with name, id, and email, and school", () => {
            const intern = new Intern ('James Sullivan', 123, 'sulley@mail.com', 'SLCC');

            expect(intern.name).toEqual(expect.any(String));
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toEqual(expect.any(String));
            expect(intern.school).toEqual(expect.any(String));
        });
    });

    describe('schoolValue', () => {
        it("should get intern's school", () => {
            const intern = new Intern ('James Sullivan', 123, 'sulley@mail.com', 'SLCC');

            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
        });
    });

    describe('getRole', () => {
        it("should get intern role", () => {
            const intern = new Intern ('James Sullivan', 123, 'sulley@mail.com', 'SLCC');

            expect(intern.getRole()).toEqual("Intern")
        })
    })
});