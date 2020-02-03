fetch('https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class4/students.json')
    .then(res => res.json())
    .then(students => {
        // console.log(loging(students))
        // console.log(allMaleStudents(students))
        // console.log(adultFemales(students))
        console.log(averageAge(students))
        // console.log(femLnameEndWithA(students))
    })
    .catch(err => console.error(err))


let allMaleStudents = students => students.filter(s => s.gender === 'Male' && s.city === 'Skopje')

let adultFemales = students => students.filter(s => s.gender === 'Female' && s.age > 18)

let averageAge = students => students.map(s => s.age).reduce((sum, avgAge)  => sum + avgAge / 200, 0)

let femLnameEndWithA = students => students.filter(s => s.lastName.endsWith('a'))


let loging = students => students.filter(s => s.averageGrade).map(s => `${s.firstName} ${s.lastName}is comming from ${s.city}, he is ${s.age} years old and he is ${s.averageGrade === 1 ? 'FAILED' : 'PASSED'}  the class`)

