CREATE TABLE show(
		name TEXT,
		description TEXT, 
		showID INTEGER PRIMARY KEY,
		semestersActive INTEGER, 
		day INTEGER, 
		hour INTEGER, 
		length INTEGER, 
		alternating BOOLEAN);

CREATE TABLE dj(
		firstName TEXT, 
		lastName TEXT, 
		djName TEXT, 
		tuftsID INTEGER PRIMARY KEY, 
		volunteerHours INTEGER, 
		active BOOLEAN,
		eboard BOOLEAN);

CREATE TABLE djShow(
		tuftsID INTEGER, 
		showID INTEGER);

CREATE TABLE volunteerLog(
	tuftsID INTEGER, 
	date DATE, 
	length INTEGER, 
	approved BOOLEAN, 
	task TEXT);

CREATE TABLE showRequest(
       tuftsID INTEGER, --should be array but creates incompatible type error(int vs int[]) 
       otherIDs TEXT, -- not the best way to do this but makes the above line work
       numDJs INTEGER,
       name TEXT,
       description TEXT,
       possibleShowdays INTEGER ARRAY[15],
       posssibleShowtimes INTEGER ARRAY[15],
       alternating BOOLEAN,
       length INTEGER);

CREATE TABLE showRenewal(
       renewalDate DATE,
       showID INTEGER);

ALTER TABLE showRequest
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);

ALTER TABLE showRenewal
 ADD FOREIGN KEY (showID)
 REFERENCES show(showID);

ALTER TABLE djShow
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);

ALTER TABLE djShow
 ADD FOREIGN KEY (showID)
 REFERENCES show(showID);

ALTER TABLE volunteerLog
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);



