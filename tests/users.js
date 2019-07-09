module.exports = {
    userWithoutAgree : {
        name: 'Miguel',
        email: 'asdasdasfsd@aafsad',
        password: 'asd123',
        confirmPassword: 'asd123',
    },
    userWithoutName: {
        email: 'asdasdasfsd@aafsad',
        password: 'asd123',
        confirmPassword: 'asd123',
    },
    onlyName: {
        name: 'Miguel'
    },
    userWithDifferentPasswords: {
        name: 'Miguel',
        email: 'asdasdasd@asdasda',
        password: 'as123',
        confirmPassword: '123as'
    },
    userWithNumbersWithName: {
        name: 131231231,
        email: 'asdasdasd@asdasdasd',
        password: 'asdasdasd',
        confirmPassword: 'sadadadad'
    },
    userWithWrongEmail: {
        name: 'Miguel',
        email: 'asdasdas',
        password: 'asdasdad',
        confirmPassword: 'asdasdasda'
    }
}
