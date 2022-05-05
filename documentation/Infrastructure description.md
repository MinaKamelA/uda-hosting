
# Infrastructure Description

## AWS services


### AWS RDS

#### Description

RDS is where our database is stored, and where we store our users' data, such as their username, email, and password, as well as any other information we may need to store about them, or their posts.

Our RDS instance is a PostgreSQL instance, and is hosted on AWS.

##### RDS information
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

#### Description

Elastic Beanstalk is a platform that allows us to easily deploy our application to AWS, and also allows us to easily scale our application up and down, as well as easily manage our application's infrastructure, such as our RDS instance and our environment variables.

![EB!](/assets/EB1.png "eb") 
*EB*

![EB!](/assets/EB2.png "eb") 
*EB*

![EB!](/assets/EB3.png "eb") 
*EB*

### AWS S3

#### Description

S3 is where we store our frontend and backend assets, such as our images, videos, HTML, and JavaScript files.

![S3!](/assets/S3-1.png "s3") 
*S3*
---

## CircleCI

#### Description

CircleCI is a continuous integration platform that allows us to easily deploy our application to AWS, and also allows us to easily scale our application up and down, as well as easily manage our application's infrastructure, such as our environment variables.

CircleCI is also a continuous delivery platform that allows us to easily deploy our application to AWS.

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

![CI/CD!](/assets/ci3.png "ci/cd") 
*CI/CD*

![CI/CD!](/assets/ci4.png "ci/cd") 
*CI/CD*

