const pgp = require('pg-promise')();
const db = pgp('postgres://localhost:5432/wmfo');

console.log("Hello World!");
/*
interface dj {
  firstName: string;
  lastName: string;
  tuftsID: number;
}
*/

/* Takes a first name string of a dj and returns the id of the dj */
function getUserID(firstName: string): Promise<number> {
    return db.one('SELECT tuftsid FROM dj WHERE firstName = $1', firstName);
}

/* Takes the name of the show and the id of the show and returns nothing */
/*
function insertShow(name:string, id: number) {
    return db.none('INSERT INTO show(name, showID) VALUES($1, $2)', [name, id])
    .then(() => {console.log("//////////inserted show")});

}
*/

function getDj(tuftsID: number): Promise<string> {
    return db.one('SELECT firstName FROM dj WHERE tuftsID = $1', tuftsID);
}


export async function printing() {
  try {
    const x: number = await getUserID('Mac');
    console.log(x);
    const name: string = await getDj(12345);
    console.log(name);
  } catch(e){
    console.log("'exception: ' e");
  }

 // await insertShow('Annie', 618);
}

