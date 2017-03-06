CREATE TABLE show(
		name TEXT, 
		showID INTEGER PRIMARY KEY, 
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
		active BOOLEAN);

CREATE TABLE djShow(
		tuftsID INTEGER, 
		showID INTEGER);


CREATE TABLE volunteerLog(
	tuftsID INTEGER, 
	date DATE, 
	length INTEGER, 
	approved BOOLEAN, 
	task TEXT);

ALTER TABLE djShow
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);

ALTER TABLE djShow
 ADD FOREIGN KEY (showID)
 REFERENCES show(showID);

ALTER TABLE volunteerLog
 ADD FOREIGN KEY (tuftsID)
 REFERENCES dj(tuftsID);



