CREATE TABLE "users5" (
  "_id" smallserial PRIMARY KEY,
  "email" varchar,
  "password" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "is_admin" boolean,
  "team_id" smallint
);

CREATE TABLE "teams5" (
  "_id" smallserial PRIMARY KEY,
  "name" varchar,
  "team_lead" varchar,
  "leader_email" varchar,
  "project" varchar
);

CREATE TABLE "namespaces5" (
  "_id" smallserial PRIMARY KEY,
  "name" varchar,
  "team_id" smallint,
  "project" varchar,
);  

CREATE TABLE "vclusters5" (
  "_id" smallserial PRIMARY KEY,
  "hostNamespace" varchar,
  "vClusterName" varchar,
  "project" varchar
);

CREATE TABLE "clusters5" {
  "_id" smallserial PRIMARY KEY,
  "clusterName" varchar,
  "region" varchar,
  "zone" varchar
}