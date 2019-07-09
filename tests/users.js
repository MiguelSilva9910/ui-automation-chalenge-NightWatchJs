module.exports = {
    userWithoutAgree : {
        name: 'Miguel',
        email: 'asdasdasfsd@aafsad',
        password: 'asd123',
        confirmPassword: 'asd123',
        language: true
    },
    userWithoutLanguage: {
        name: 'Miguel',
        email: 'asdasdasfsd@aafsad',
        password: 'asd123',
        confirmPassword: 'asd123',
        language: false
    },
    userWithoutName: {
        email: 'asdasdasfsd@aafsad',
        password: 'asd123',
        confirmPassword: 'asd123',
        language: true
    },
    onlyName: {
        name: 'Miguel'
    },
    userWithDifferentPasswords: {
        name: 'Miguel',
        email: 'asdasdasd@asdasda',
        password: 'as123',
        confirmPassword: '123as',
        language: true
    },
    userWithNumbersWithName: {
        name: 131231231,
        email: 'asdasdasd@asdasdasd',
        password: 'asdasdasd',
        confirmPassword: 'sadadadad',
        language: true
    },
    userWithWrongEmail: {
        name: 'Miguel',
        email: 'asdasdas',
        password: 'asdasdad',
        confirmPassword: 'asdasdasda',
        language: true
    }
}
