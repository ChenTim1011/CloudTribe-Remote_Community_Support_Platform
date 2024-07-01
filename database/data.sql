--想要添加輸入範例資料可以再這裡加 插入範例資料 終端機輸入
-- cat ./data.sql | docker compose exec -T postgres psql --username postgres --dbname pg       
INSERT INTO users (name, email, age) VALUES ('Alice', 'alice@example.com', 28);
INSERT INTO users (name, email, age) VALUES ('Bob', 'bob@example.com', 32);
INSERT INTO users (name, email, age) VALUES ('Charlie', 'charlie@example.com', 25);
INSERT INTO users (name, email, age) VALUES ('David', 'david@example.com', 40);
INSERT INTO users (name, email, age) VALUES ('Eva', 'eva@example.com', 22);
INSERT INTO users (name, email, age) VALUES ('Frank', 'frank@example.com', 35);
INSERT INTO users (name, email, age) VALUES ('Grace', 'grace@example.com', 30);
INSERT INTO users (name, email, age) VALUES ('Hannah', 'hannah@example.com', 27);
INSERT INTO users (name, email, age) VALUES ('Ivy', 'ivy@example.com', 29);
INSERT INTO users (name, email, age) VALUES ('Jack', 'jack@example.com', 33);
