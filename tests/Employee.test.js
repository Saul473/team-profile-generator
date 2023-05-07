const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create object with name, id, and email properties", () => {
            const employee = new Employee ('James Sullivan', 123, 'sulley@mail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    describe('getName', () => {
        it("should return employee's name", () => {
            const employee = new Employee('James Sullivan', 123, 'sulley@mail.com');

            expect(employee.getName()).toEqual(expect.any(String));
        });
    });

    describe('getId', () => {
        it("should return employee's id", () => {
            const employee = new Employee('James Sullivan', 123, 'sulley@mail.com');

            expect(employee.getId()).toEqual(expect.any(Number));
        });
    });

    describe('getEmail', () => {
        it("should return employee's email", () => {
            const employee = new Employee('James Sullivan', 123, 'sulley@mail.com');

            expect(employee.getEmail()).toEqual(expect.any(String));
        });
    });

    describe('getRole', () => {
        it("should return employee's email", () => {
            const employee = new Employee('James Sullivan', 123, 'sulley@mail.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });

})