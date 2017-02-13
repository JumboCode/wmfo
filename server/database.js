const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/wmfo';
const client = pgp(connectionString);
client.connect();

var query_show = client.query(
				'DROP TABLE IF EXISTS show');
query_show = client.query(
'CREATE TABLE show(name TEXT, showID INTEGER PRIMARY KEY, day INTEGER, hour INTEGER, length INTEGER, alternating BOOLEAN)');
var query_dj = client.query(
			      'DROP TABLE IF EXISTS dj');
query_dj = client.query(
'CREATE TABLE dj(firstName TEXT, lastName TEXT, djName TEXT, tuftsID INTEGER PRIMARY KEY, volunteerHours INTEGER, active BOOLEAN)');
var query_djShow = client.query(
				  'DROP TABLE IF EXISTS djShow');
query_djShow = client.query(
'CREATE TABLE djshow(tuftsID INTEGER REFERENCES dj(tuftsID), showID INTEGER REFERENCES show(showID))');
var query_volunteerLog = client.query(
				      'DROP TABLE IF EXISTS volunteerLog');
query_volunteerLog = client.query(
'CREATE TABLE volunteerlog(tuftsID INTEGER REFERENCES dj(tuftsID), date DATE, length INTEGER, approved BOOLEAN, task TEXT)');