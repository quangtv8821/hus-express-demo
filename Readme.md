
# HUS-EXPRESS-DEMO

A simple ExpressJS server.

![Logo](https://www.google.com/u/0/ac/images/logo.gif?uid=111950459518512810315&service=google_gsuite)

## 🛠 Tech
- Javascript
- NodeJS (ExpressJS framework)



## Authors

- [quangtv@rabiloo.com](https://github.com/quangtv8821)


## 🔗 Links
[![facebook](https://img.shields.io/badge/facebook-0A66C2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/quangn123/)
[![gmail](https://img.shields.io/badge/gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox)



## Installation

```bash
  npm install
```
## Running
- Production mode:
```bash
  npm run start
```

- Dev mode:
```bash
  npm run dev
```


## API Reference

| Endpoint          |  Description                          |
| :-----------------|  :------------------------------------|
| `/account`        |  Account of student                   |
| `/student`        |  Student information                  |
| `/subject`        |  Subject student study                |
| `/lesson`         |  Lesson in one subject                |

## Relation
-- 1 student has 1 account
-- 1 subject has many students and 1 one student in many classes
-- 1 subject has many lessons

