const pgp = require('pg-promise')();
const db = pgp('postgres://localhost:5432/wmfo');

console.log("Hello World!");
printing();
/*
interface dj {
  firstName: string;
  lastName: string;
  tuftsID: number;
}
*/


/* DJSHOW (have not tested yet)*/
function insertDjShow(tuftsID: number, showID: number) {
	 return db.none('INSERT INTO djShow(tuftsID, showID) VALUES($1, $2)', [tuftsID, showID])
	 .then(() => {console.log("///WE INSERTED NEW DJSHOW!")});
}

function getShowFromDjShow(tuftsID: number): Promise<number> {
	 return db.one('SELECT showid FROM djshow WHERE tuftsID = $1', tuftsID);
}

function getDjFromDjShow(showID: number): Promise<number> {
	 return db.one('SELECT tuftsid FROM djshow WHERE showID = $1', showID);
}

/* DJ TABLE */
/* Takes a first name string of a dj and returns the id of the dj */


function getUserID(firstName: string): Promise<number> {
    return db.one('SELECT tuftsid FROM dj WHERE firstName = $1', firstName);
}

function getDj(tuftsID: number): Promise<string> {
    return db.one('SELECT firstName FROM dj WHERE tuftsID = $1', tuftsID);
}

function insertDj(firstName: string, lastName: string, djName: string, tuftsID: number, volunteerHours: number, active: boolean) {
    return db.none('INSERT INTO dj(firstName, lastName, djName, tuftsID, volunteerHours, active) VALUES($1, $2, $3, $4, $5, $6)', [firstName, lastName, djName, tuftsID, volunteerHours, active])
    .then(() => {console.log("//////WE INSERTED NEW DJ")});
}


/* INSERTING DATA TO SHOW TABLE */
/* Takes the name of the show and the id of the show and returns nothing */

function insertShow(name:string, showID: number, day: number, hour: number, length: number, alternating: boolean) {
    return db.none('INSERT INTO show(name, showid, day, hour, length, alternating) VALUES($1, $2, $3, $4, $5, $6)', [name, showID, day, hour, length, alternating])
    .then(() => {console.log("//////////inserted show")});

}

/*function getShow(id: number) {
    return db.one('SELECT name FROM show WHERE showID = $1', id);
}*/
/*export async function printing() {
  try {
  //  await insertShow('WhoIsGoingToWinThePineapple', 1, 1, 1, 1, true);
    const name: string = await getShow(1);
    console.log(name);
  } catch(e){
    console.log("'exception: ' e");
  }
}*/


export async function printing() {
  try {
    insertDj('Noah', 'Adler', 'dankplank', 70, 10, true);
    insertShow('yams', 676, 4, 2, 1, true);
    
    
    const x: number = await getUserID('Noah');
    console.log(x);
    const name: string = await getDj(70);
    console.log(name);
    
    await insertDjShow(70, 676);
    const y: number = await getShowFromDjShow(70);
    console.log(y);
    const djx: number = await getDjFromDjShow(676);
    console.log(djx);
  } catch(e){
    console.log('exception: ', e);
  }
 // insertDj('Nick', 'Metzger', 'NickyMetz', 69, 9, true);
 // await insertShow('Annie', 618);
}


