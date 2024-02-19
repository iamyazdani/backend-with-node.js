require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const githubData = {
    "login": "iamyazdani",
    "id": 91947411,
    "node_id": "U_kgDOBXsBkw",
    "avatar_url": "https://avatars.githubusercontent.com/u/91947411?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/iamyazdani",
    "html_url": "https://github.com/iamyazdani",
    "followers_url": "https://api.github.com/users/iamyazdani/followers",
    "following_url": "https://api.github.com/users/iamyazdani/following{/other_user}",
    "gists_url": "https://api.github.com/users/iamyazdani/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/iamyazdani/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/iamyazdani/subscriptions",
    "organizations_url": "https://api.github.com/users/iamyazdani/orgs",
    "repos_url": "https://api.github.com/users/iamyazdani/repos",
    "events_url": "https://api.github.com/users/iamyazdani/events{/privacy}",
    "received_events_url": "https://api.github.com/users/iamyazdani/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Gulam Yazdani",
    "company": "TekGeminus Solutions (P) Ltd.",
    "blog": "gulamyazdani03@gmail.com",
    "location": "Pune, MH",
    "email": null,
    "hireable": null,
    "bio": "👨‍💻 Full-stack Developer with a primary interest in Core Java development, Web development, React.js, and Oracle SQL. ⚡",
    "twitter_username": "iamyazdani_",
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-10-05T09:16:47Z",
    "updated_at": "2024-02-18T11:41:58Z"
};

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/https://www.linkedin.com/in/gulamyazdani4/', (req, res) => {
    res.send('Gulam Yazdani Welcomes You on LinkedIn!');
});

app.get('/https://twitter.com/iamyazdani_', (req, res) => {
    res.send('Gulam Yazdani Welcomes You on X!');
});

app.get('/login', (req, res) => {
    res.send('<h2>Follow me on LinekedIn and X</h2>');
});

app.listen(port, () => {
  console.log(`Demo app listening on port ${port}`);
});