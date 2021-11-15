
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance_level" int NOT NULL);


CREATE TABLE "runs" (
	"id" serial PRIMARY KEY NOT NULL,
	"start_timestamp" TIMESTAMP NOT NULL,
	"end_timestamp" TIMESTAMP NOT NULL,
	"user_id" int NOT NULL REFERENCES "user");
	
	
CREATE TYPE category as ENUM('airway', 'cpr', 'access', 'medication');


CREATE TABLE "events" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" category NOT NULL,
	"procedure" varchar(255) NOT NULL,
	"detail" varchar(255) NOT NULL);


CREATE TABLE "runs_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"events_id" int NOT NULL REFERENCES "events",
	"runs_id" int NOT NULL REFERENCES "runs",
	"timestamp" TIMESTAMP NOT NULL,
	"comments" varchar(255) NOT NULL);











