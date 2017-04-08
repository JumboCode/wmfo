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


/* DJ TABLE */
/* Takes a first name string of a dj and returns the id of the dj */

function getUserID(firstName: string): Promise<number> {
    return db.one('SELECT tuftsid FROM dj WHERE firstName = $1', firstName);
} 

function getDj(tuftsID: number): Promise<string> {
    return db.one('SELECT firstName FROM dj WHERE tuftsID = $1', tuftsID);
}

/*
function insertDj(firstName: string, lastName: string, djName: string, tuftsID: number, volunteerHours: number, active: boolean) {
    return db.none('INSERT INTO dj(firstName, lastName, djName, tuftsID, volunteerHours, active) VALUES($1, $2, $3, $4, $5, $6)', [firstName, lastName, djName, tuftsID, volunteerHours, active])
    .then(() => {console.log("//////WE INSERTED NEW DJ")});
}
*/

/* INSERTING DATA TO SHOW TABLE */
/* Takes the name of the show and the id of the show and returns nothing */
/*
function insertShow(name:string, showID: number, day: number, hour: number, length: number, alternating: boolean) {
    return db.none('INSERT INTO show(name, showid, day, hour, length, alternating) VALUES($1, $2, $3, $4, $5, $6)', [name, showID, day, hour, length, alternating])
    .then(() => {console.log("//////////inserted show")});

}
*/

/*
function getShow(id: number) {
    return db.one('SELECT name FROM show WHERE showID = $1', id);
}
*/


/* INSERTING VOLUNTEER LOG */

function insertVlog(tuftsID: number, date: Date, length: number, approved: boolean, task: string){
    return db.none('INSERT INTO volunteerlog(tuftsID, date, length, approved, task) VALUES($1, $2, $3, $4, $5)', [tuftsID,
    date, length, approved, task])
    .then(() => {console.log("//////inserted vlog")});
}


/* Return's all dates of vlogs under same tuftsID */
function getVlog(tuftsID: number): Promise<Date> {
    return db.any('SELECT date FROM volunteerlog WHERE tuftsID = $1', tuftsID);
}


var b: Date = new Date('2015-11-16T00:00:00');

export async function printing() {
  try {
  //  insertDj('Marilyn', 'Miller', 'Maac', 234, 1, true);
    insertVlog(123, b, 60, true, 'play music');
    const y: number = await getUserID('Mac');
    console.log(y); 
    const x: Date = await getVlog(123);
    console.log(x);
    const name: string = await getDj(12345);
    console.log(name);
  } catch(e){
    console.log("'exception: ' e");
  }
 // insertDj('Nick', 'Metzger', 'NickyMetz', 69, 9, true);
 // await insertShow('Annie', 618);
}


