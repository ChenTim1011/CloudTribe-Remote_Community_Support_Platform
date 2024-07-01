-- 想要建立資料庫可以再這裡加 建立資料庫指令 終端機輸入
-- cat ./createdb.sql | docker compose exec -T postgres psql --username postgres --dbname stadium
CREATE TABLE IF NOT EXISTS users (
  "id" serial PRIMARY KEY, 
  "name"  VARCHAR (255) NOT NULL, 
  "email" VARCHAR (255) NOT NULL, 
  "age" INT NOT NULL
  );