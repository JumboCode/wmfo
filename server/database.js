const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wmfo';
const client = pgp(connectionString);
client.connect();

var query_show = client.query(
	'DROP TABLE IF EXISTS show');

query_show = client.query(
	'CREATE TABLE show(
		name TEXT, 
		showID INTEGER PRIMARY KEY, 
		day INTEGER, 
		hour INTEGER, 
		length INTEGER, 
		alternating BOOLEAN)');

var query_dj = client.query(
	'DROP TABLE IF EXISTS dj');

query_dj = client.query(
	'CREATE TABLE dj(
		firstName TEXT, 
		lastName TEXT, 
		djName TEXT, 
		tuftsID INTEGER PRIMARY KEY, 
		volunteerHours INTEGER, 
		active BOOLEAN)');

var query_djShow = client.query(
	'DROP TABLE IF EXISTS djShow');

query_djShow = client.query(
	'CREATE TABLE djShow(
		tuftsID INTEGER, 
		showID INTEGER)');

var query_volunteerLog = client.query(
	'DROP TABLE IF EXISTS volunteerLog');

query_volunteerLog = client.query(
	'CREATE TABLE volunteerLog(
		tuftsID INTEGER, 
		date DATE, 
		length INTEGER, 
		approved BOOLEAN, 
		task TEXT)');

var query_add_foreign_key = client.query(
	'ALTER TABLE djShow
	 ADD FOREIGN KEY (tuftsID)
	 REFERENCES dj(tuftsID)')

query_add_foreign_key = client.query(
	'ALTER TABLE volunteerLog
	 ADD FOREIGN KEY (tuftsID)
	 REFERENCES dj(tuftsID)')



