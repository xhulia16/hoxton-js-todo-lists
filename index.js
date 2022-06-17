const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
]
const todos = [
    {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: 'suscipit repellat esse quibusdam voluptatem incidunt',
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: 'distinctio vitae autem nihil ut molestias quo',
        completed: true
    },
    {
        userId: 3,
        id: 5,
        title: 'rerum perferendis error quia ut eveniet',
        completed: false
    },
    {
        userId: 3,
        id: 6,
        title: 'tempore ut sint quis recusandae',
        completed: true
    },
    {
        userId: 4,
        id: 7,
        title: 'odit optio omnis qui sunt',
        completed: true
    },
    {
        userId: 4,
        id: 8,
        title: 'et placeat et tempore aspernatur sint numquam',
        completed: false
    }
]
for (let i = 0; i < users.length; i++) {
    alert(`Id number: ${users[i].id}; Name: ${users[i].name}; City: ${users[i].address.city}`)
}

let newUserId = Number(prompt("What is your user ID?"))
for (let i = 0; i < todos.length; i++) {
    if (newUserId === todos[i].userId) {
        console.log(todos[i].title, todos[i].completed)
    }
}