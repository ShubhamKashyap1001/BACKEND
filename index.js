require('dotenv').config()
//console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')

const app = express()

const port = 4000

const githubData = {
  "login": "ShubhamKashyap1001",
  "id": 179225178,
  "node_id": "U_kgDOCq7CWg",
  "avatar_url": "https://avatars.githubusercontent.com/u/179225178?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ShubhamKashyap1001",
  "html_url": "https://github.com/ShubhamKashyap1001",
  "followers_url": "https://api.github.com/users/ShubhamKashyap1001/followers",
  "following_url": "https://api.github.com/users/ShubhamKashyap1001/following{/other_user}",
  "gists_url": "https://api.github.com/users/ShubhamKashyap1001/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ShubhamKashyap1001/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ShubhamKashyap1001/subscriptions",
  "organizations_url": "https://api.github.com/users/ShubhamKashyap1001/orgs",
  "repos_url": "https://api.github.com/users/ShubhamKashyap1001/repos",
  "events_url": "https://api.github.com/users/ShubhamKashyap1001/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ShubhamKashyap1001/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "SHUBHAM KUMAR",
  "company": "Heritage Institute of Technology",
  "blog": "",
  "location": "Kolkata India",
  "email": null,
  "hireable": null,
  "bio": ".",
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 1,
  "following": 6,
  "created_at": "2024-08-23T11:37:17Z",
  "updated_at": "2025-06-23T06:29:57Z"
}

app.get('/',(req,res) => {
    res.send("Hello World !!")
})

app.get('/twitter',(req,res) => {
    res.send("hitesh-world")
})

app.get('/login',(req,res) => {
    res.send("<h1>Please login on Chai aur Code</h1>");
})

app.get('/github',(req,res) => {
    res.json(githubData);
})

app.listen(process.env.PORT,() => {
    console.log(`Example app Listening on port ${port}`);
    
})
