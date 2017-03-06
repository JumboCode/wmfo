const pgp = require('pg-promise')();
const db = pgp('postgres://localhost:5432/wmfo');

console.log("Hello World!");
function getInsertUserId(firstName: string) {
        return db.task((t: any) => {
                        return t.oneOrNone
         ('SELECT tuftsid FROM dj WHERE firstName = $1', 
                            firstName, (u: any) => u && u.tuftsid)
                .then((tuftsid: number) => {
                      return tuftsid || t.one('INSERT INTO dj(firstName) VALUES($1)RETURNING tuftsid', firstName, (u: any)  => u.id);
                                                                                });
                                                });
}
//|| t.one('INSERT INTO Users(name) VALUES($1) RETURNING id', name, u => u.id)

console.log('beforefunctioncall');
var toprint = getInsertUserId('mac');

console.log('AFTER');
toprint.then(t => console.log(t));
async function f() {
    const id = await getInsertUserId('mac');
    console.log('got from await:', id);
}
f();
