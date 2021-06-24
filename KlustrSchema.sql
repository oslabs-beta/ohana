CREATE TABLE "users" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "email" varchar NOT NULL,
  "password" varchar NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "is_admin" boolean,
  "team_id" smallint,
  "edit_access" boolean
);

CREATE TABLE "teams" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "team_name" varchar NOT NULL,
  "team_lead" varchar NOT NULL,
  "leader_email" varchar NOT NULL,
  "project" varchar
);

CREATE TABLE "namespaces" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "name" varchar NOT NULL,
  "team_id" smallint NOT NULL,
  "project" varchar
  -- added this
  "cluster_id" smallint
  -- need to make cluster_id NOT NULL
);  

CREATE TABLE "vclusters" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "owner_id" smallint NOT NULL,
  "team_id" smallint NOT NULL,
  "namespace_id" varchar,
  "project" varchar
);

-- added clusters table
CREATE TABLE "clusters" (
  "_id" smallserial PRIMARY KEY NOT NULL,
  "cluster_name" varchar NOT NULL,
  "region" varchar,
  "zone" varchar
);

ALTER TABLE "users" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("_id");

-- ALTER TABLE "vclusters" ADD FOREIGN KEY ("namespace_id") REFERENCES "namespaces" ("_id");

ALTER TABLE "vclusters" ADD FOREIGN KEY ("owner_id") REFERENCES "users" ("_id");

ALTER TABLE "namespaces" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("_id");

ALTER TABLE "namespaces" ADD FOREIGN KEY ("cluster_id") REFERENCES "clusters" ("_id");

ALTER TABLE "vclusters" ADD FOREIGN KEY ("team_id") REFERENCES "teams" ("_id");
