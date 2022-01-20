-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, image_url, user_id
FROM posts
WHERE user_id = 26;



-- Exercise 5
SELECT id, image_url, user_id
FROM posts
WHERE user_id = 26 or user_id = 12;



-- Exercise 6
SELECT COUNT(*)
FROM posts;



-- Exercise 7
SELECT user_id, COUNT(*) AS count
FROM comments
GROUP BY user_id
ORDER BY count DESC;



-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, username, first_name, last_name
FROM posts
JOIN users on users.id = posts.user_id
WHERE user_id = 26 or user_id = 12;



-- Exercise 9
SELECT posts.id, pub_date, following_id
FROM following
JOIN posts on following_id = posts.user_id
WHERE following.user_id = 26;




-- Exercise 10
SELECT posts.id, pub_date, following_id, users.username
FROM following
JOIN posts on following_id = posts.user_id
JOIN users on users.id = posts.user_id 
WHERE following.user_id = 26
ORDER BY pub_date DESC;



-- Exercise 11
INSERT INTO bookmarks(user_id, post_id)
VALUES(26, 219);

INSERT INTO bookmarks(user_id, post_id)
VALUES(26, 220);

INSERT INTO bookmarks(user_id, post_id)
VALUES(26, 221);


-- Exercise 12
DELETE FROM bookmarks
WHERE user_id = 26 AND post_id = 219;

DELETE FROM bookmarks
WHERE user_id = 26 AND post_id = 220;

DELETE FROM bookmarks
WHERE user_id = 26 AND post_id = 221;



-- Exercise 13
UPDATE users
SET email = 'cyoung2022@gmail.com'
WHERE first_name = 'Cody';



-- Exercise 14
SELECT posts.id, posts.user_id, cnt, caption
FROM posts
JOIN comments on posts.id = comments.post_id
JOIN (SELECT comments.post_id, COUNT(*) as cnt
	  FROM comments
	  GROUP BY comments.post_id) q2
ON q2.post_id = comments.post_id
WHERE posts.user_id = 26
GROUP BY posts.id, q2.cnt
ORDER BY cnt DESC;