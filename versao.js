const options = {
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'estudo',
        password: 'e24rh33b',
        database: 'chatter'
    }
}

const knex = require('knex')(options);

    // knex.raw("SELECT VERSION()").then(
    //     (version) => console.log((version))
    // ).catch((err) => { console.log( err); throw err })
    //     .finally(() => {
    //         knex.destroy();
    //     }); 

    knex.from('users').select("*")
        .then((rows) => {
            for (row of rows) {
                console.log(`${row['id']} ${row['login']} ${row['password']}`);
            }
        }).catch((err) => { console.log( err); throw err })
        .finally(() => {
            knex.destroy();
        });