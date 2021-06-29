CREATE TABLE "users" (
  "_id" smallserial PRIMARY KEY,
  "email" varchar,
  "password" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "is_admin" varchar,
  "team_id" smallint
);

CREATE TABLE "teams" (
  "_id" smallserial PRIMARY KEY,
  "name" varchar
);

CREATE TABLE "namespaces" (
  "_id" smallserial PRIMARY KEY,
  "name" varchar,
  "cluster_id" smallint
  team_id
);

CREATE TABLE "vclusters" (
  "_id" smallserial PRIMARY KEY,
  "name" varchar,
  "owner_id" smallint,
  "team_id" smallint,
  "namespace_id" smallint
);

CREATE TABLE "clusters" (
  "_id" smallserial PRIMARY KEY,
  "name" varchar
);

ALTER TABLE "users" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("_id");

ALTER TABLE "vclusters" ADD FOREIGN KEY ("namespace_id") REFERENCES "namespaces" ("_id");

ALTER TABLE "vclusters" ADD FOREIGN KEY ("owner_id") REFERENCES "users" ("_id");

ALTER TABLE "vclusters" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("_id");

ALTER TABLE "namespaces" ADD FOREIGN KEY ("cluster_id") REFERENCES "clusters" ("_id");
