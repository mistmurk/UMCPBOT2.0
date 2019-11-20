CREATE TABLE games (
    id serial UNIQUE NOT NULL,
    discord_id varchar(20) NOT NULL,
    name varchar(50) NOT NULL
);

CREATE TABLE aliases (
    id serial UNIQUE NOT NULL,
    alias varchar(50) NOT NULL,
    game_id integer REFERENCES games(id)
);

CREATE TABLE admins (
  discord_id varchar(20) NOT NULL
);
