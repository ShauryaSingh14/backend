require("dotenv").config();

const express = require("express");
// import express from "express" another way
const app = express();
const port = 3000;
const githubData = {
  login: "ShauryaSingh14",
  id: 71541809,
  node_id: "MDQ6VXNlcjcxNTQxODA5",
  avatar_url: "https://avatars.githubusercontent.com/u/71541809?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/ShauryaSingh14",
  html_url: "https://github.com/ShauryaSingh14",
  followers_url: "https://api.github.com/users/ShauryaSingh14/followers",
  following_url:
    "https://api.github.com/users/ShauryaSingh14/following{/other_user}",
  gists_url: "https://api.github.com/users/ShauryaSingh14/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/ShauryaSingh14/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/ShauryaSingh14/subscriptions",
  organizations_url: "https://api.github.com/users/ShauryaSingh14/orgs",
  repos_url: "https://api.github.com/users/ShauryaSingh14/repos",
  events_url: "https://api.github.com/users/ShauryaSingh14/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/ShauryaSingh14/received_events",
  type: "User",
  site_admin: false,
  name: "Shaurya Singh",
  company: null,
  blog: "",
  location: "Delhi, India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 23,
  public_gists: 0,
  followers: 3,
  following: 0,
  created_at: "2020-09-19T06:01:12Z",
  updated_at: "2024-06-25T04:34:06Z",
};
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.get("/home", (req, res) => {
  res.send("<h1>Login into chai aur code </h1>");
});

app.get("/chai", (res, req) => {
  res.send("I love chai");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening at port ${port}`);
});
