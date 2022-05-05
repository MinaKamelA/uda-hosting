# Udagram
---

# Table of contents


- [Project Title](#udagram)
- [Table of contents](#table-of-contents)
- [Description](#description)
- [Getting Started](#getting-started)
- [App Link](#app-link)
- [Dependencies](#dependencies)
- [Frontend Dependencies](#frontend-dependencies)
- [Backend Dependencies](#baclend-dependencies)
- [Installation](#installation)
- [Testing](#testing)
- [CI/CD](#ci-cd)
- [AWS services](#aws-services)

---

# Description
[(Back to top)](#table-of-contents)
This application is provided by Udacity as a starter project to host. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application.

## Getting Started
[(Back to top)](#table-of-contents)
1. Clone this repo locally into the location of your choice.
1. Move the content of the udagram folder at the root of the repository as this will become the main content of the project.
1. Open a terminal and navigate to the root of the repo
1. follow the instructions in the installation step

The project can run but is missing some information to connect to the database and storage service. These will be setup during the course of the project

## App Link
[(Back to top)](#table-of-contents)

Link for the app: [Udagram](https://udagram-files.s3.us-east-1.amazonaws.com/)

## Dependencies
[(Back to top)](#table-of-contents)
```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

## Frontend Dependencies
[(Back to top)](#table-of-contents)

### Dependencies

1. "@angular/common": "^8.2.14",
2. "@angular/core": "^8.2.14",
3. "@angular/forms": "^8.2.14",
4. "@angular/http": "^7.2.2",
5. "@angular/platform-browser": "^8.2.14",
6. "@angular/platform-browser-dynamic": "^8.2.14",
7. "@angular/router": "^8.2.14",
8. "@ionic-native/core": "^5.0.0",
9. "@ionic-native/splash-screen": "^5.0.0",
10. "@ionic-native/status-bar": "^5.0.0",
11. "@ionic/angular": "^4.1.0",
12. "core-js": "^2.5.4",
13. "rxjs": "~6.5.4",
14. "zone.js": "~0.9.1"
---
### DevDependencies

1. "@angular-devkit/architect": "~0.12.3",
2. "@angular-devkit/build-angular": "^0.803.24",
3. "@angular-devkit/core": "~7.2.3",
4. "@angular-devkit/schematics": "~7.2.3",
5. "@angular/cli": "~8.3.25",
6. "@angular/compiler": "~8.2.14",
7. "@angular/compiler-cli": "~8.2.14",
8. "@angular/language-service": "~8.2.14",
9. "@ionic/angular-toolkit": "~1.4.0",
10. "@types/jasmine": "~2.8.8",
11. "@types/jasminewd2": "~2.0.3",
12. "@types/node": "~10.12.0",
13. "@typescript-eslint/eslint-plugin": "^2.20.0",
14. "@typescript-eslint/parser": "^2.20.0",
15. "codelyzer": "~4.5.0",
16. "jasmine-core": "~2.99.1",
17. "jasmine-spec-reporter": "~4.2.1",
18. "karma": "~3.1.4",
19. "karma-chrome-launcher": "~2.2.0",
20. "karma-coverage-istanbul-reporter": "~2.0.1",
21. "karma-jasmine": "~1.1.2",
22. "karma-jasmine-html-reporter": "^0.2.2",
23. "protractor": "~5.4.0",
24. "ts-node": "~8.0.0",
25. "tslint": "~5.12.0",
26. "typescript": "^3.5.3"
---

## Backend Dependencies
[(Back to top)](#table-of-contents)

### Dependencies

1. "@types/bcrypt": "^3.0.0",
2. "@types/jsonwebtoken": "^8.3.2",
3. "aws-sdk": "^2.429.0",
4. "bcrypt": "^5.0.1",
5. "body-parser": "^1.18.3",
6. "cors": "^2.8.5",
7. "dotenv": "^8.2.0",
8. "email-validator": "^2.0.4",
9. "express": "^4.16.4",
10. "jsonwebtoken": "^8.5.1",
11. "pg": "^8.7.1",
12. "reflect-metadata": "^0.1.13",
13. "rimraf": "^3.0.2",
14. "sequelize": "^5.21.4",
15. "sequelize-typescript": "^0.6.9"
---
### DevDependencies

1. "@types/bluebird": "^3.5.26",
2. "@types/cors": "^2.8.6",
3. "@types/express": "^4.16.1",
4. "@types/node": "^11.11.6",
5. "@types/sequelize": "^4.27.44",
6. "@types/validator": "^10.9.0",
7. "@typescript-eslint/eslint-plugin": "^2.19.2",
8. "@typescript-eslint/parser": "^2.19.2",
9. "chai": "^4.2.0",
10. "chai-http": "^4.2.1",
11. "eslint": "^6.8.0",
12. "eslint-config-google": "^0.14.0",
13. "mocha": "^6.1.4",
14. "nodemon": "^2.0.15",
15. "ts-node-dev": "^1.0.0-pre.32",
16. "typescript": "^3.3.4000"
---
### Installation
[(Back to top)](#table-of-contents)

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.
---
## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
---
## CI CD
[(Back to top)](#table-of-contents)

Continues integration and continuous deployment is a process of automating the deployment of software to production environments.

In this project we use [circleci](https://circleci.com/) to automate the deployment of the application.

The CI/CD pipeline is as follows:
1. Build the application which is required before running the tests.
2. Run the unit tests in this case frontend tests which is also required before running the deployment.
3. Deploy the application to production.

### CI/CD pipeline diagram

![pipeline!](/assets/ci.png "Pipeline diagram") 
*Pipeline*

### CI/CD status

[![CircleCI](https://circleci.com/gh/MinaKamelA/uda-hosting/tree/master.svg?style=svg)](https://circleci.com/gh/MinaKamelA/uda-hosting/tree/master)

### CI/CD screenshot

![CI/CD!](/assets/ci1.png "ci/cd") 
*CI/CD*

![CI/CD!](/assets/ci2.png "ci/cd") 
*CI/CD*

---

## AWS services
[(Back to top)](#table-of-contents)

### AWS RDS

DB: udagram
RDS: database-1
PORT: 5432
Driver: postgres

![RDS!](/assets/RDS3.png "rds") 
*RDS*

![RDS!](/assets/RDS1.png "rds") 
*RDS*

![RDS!](/assets/RDS2.png "rds") 
*RDS*

### AWS Elastic Beanstalk


![EB!](/assets/EB1.png "eb") 
*EB*

![EB!](/assets/EB2.png "eb") 
*EB*

![EB!](/assets/EB3.png "eb") 
*EB*

### AWS S3


![S3!](/assets/S3-1.png "s3") 
*S3*
