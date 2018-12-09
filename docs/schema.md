## `Users`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`email`           | string    | not null, indexed, unique
`session_token`   | string    | not null, indexed, unique
`name`            | string    | not null, indexed
`password_digest` | string    | not null
`profile_pic`     | string    | 
`cover_photo`     | string    | 
`birthday`        | string    | 
`gender`          | string    | 

---

## `Friend Requests - Joins`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`requestee_id`    | integer   | not null, foreign key, indexed
`requester_id`    | integer   | not null, foreign key, indexed

---
## `Friendships - Joins`
column name     | data type | details
----------------|-----------|-----------------------
`id`             | integer   | not null, primary key
`user_one_id`    | integer   | not null, foreign key, indexed
`user_two_id`    | integer   | not null, foreign key, indexed

---
## `Posts`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`poster_id`       | integer   | not null, foreign key, indexed
`postee_id`       | integer   | not null, foreign key, indexed
`body`            | string    | not null

--- 
## `Likes`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`object_id`       | integer   | not null, foreign key, indexed
`user_id`         | string    | not null, foreign key

---
## `Comments`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`object_id`       | integer   | not null, foreign key, indexed
`body`            | string    | not null

---


