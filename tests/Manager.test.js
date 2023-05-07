const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create object with name, id, email, and office number", () => {
            const manager = new Manager ('James Sullivan', 123, 'sulley@mail.com', 22);

            expect(manager.name).toEqual(expect.any(String));
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toEqual(expect.any(String));
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });

    describe('getRole', () => {
        it('should get manager role', () => {
            const manager = new Manager ('James Sullivan', 123, 'sulley@mail.com', 22);

            expect(manager.getRole()).toEqual("Manager")
        })
    })
});