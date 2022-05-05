# Pipeline Process

## Description

Our pipeline process is as follows:
We have 3 main jobs to run, and each job has its own steps.

1. [Build](#build)
2. [Test](#test)
3. [Deploy](#deploy)

Each job has its own steps, and each step has its own steps, and each job requires the previous job to be completed before it can be run.

## Pipeline structure

We run our pipeline on current version of CircleCI which is version 2.1.

### orbs

We have four main orbs we run our pipeline on:
**node:** The node orb.
**aws-cli:** the orb responsible for installing and configuring AWS CLI.
**aws-elastic-beanstalk:** the orb responsible for configuring AWS Elastic Beanstalk.
**browser-tools:** the orb responsible for configuring browser tools for frontend tests.

### jobs

## build

In build job we build our application and make it ready for deployment.

### steps

1. **node/install** - Installs node version 16.13 and npm.
2. **checkout** - Checks out the latest version of the repository.
3. **restore_cache** - Restores the cache from the previous build for frontend dependencies while checking that the package.json for frontend hasn't change.
4. **Install front-end dependencies** - Installs front-end dependencies if cache wasn't restored.
5. **save_cache** - Saves the cache for the next build.
6. **restore_cache** - Restores the cache from the previous build for backend dependencies while checking that the package.json for backend hasn't change.
7. **Install backend dependencies** - Installs backend dependencies if cache wasn't restored.
8. **save_cache** - Saves the cache for the next build.
9. **Build front-end** - Builds the frontend.
10. **persist_to_workspace** - Persists the frontend build to the workspace to be used in deploy.
11. **Build back-end** - Builds the backend.
12. **persist_to_workspace** - Persists the backend build to the workspace to be used in deploy.

## test

In test job we test our application's frontend and make sure it is ready for deployment.

### steps

1. **node/install** - Installs node version 16.13 and npm.
2. **checkout** - Checks out the latest version of the repository.
3. **browser-tools/install-chrome** - Installs Chrome.
4. **browser-tools/install-chromedriver** - Installs Chromedriver.
5. **restore_cache** - Restores the cache from the previous build for frontend dependencies while checking that the package.json for frontend hasn't change.
6. **Test front-end** - Tests the frontend.

## deploy

In deploy job we deploy our application to AWS so that it can be accessed by our users.

### steps

1. **node/install** - Installs node version 16.13 and npm.
2. **checkout** - Checks out the latest version of the repository.
3. **aws-cli/setup** - Sets up AWS CLI.
4. **aws-elastic-beanstalk/setup** - Sets up AWS Elastic Beanstalk.
5. **restore_cache** - Restores the cache from the previous build for frontend dependencies while checking that the package.json for frontend hasn't change.
6. **attach_workspace** - Attaches the workspace for frontend build path to the current job to be used in deploy.
7. **Deploy frontend** - Deploys the frontend.
8. **configure eb** - Configures the Beanstalk environment using the config file in .elasticbeanstalk directory in our application.
9. **attach_workspace** - Attaches the workspace for backend build path to the current job to be used in deploy.
10. **Deploy backend** - Deploys the backend.

### workflows

In our workflows we have the version which is 2 and the name of the workflow which is "udagram".

We first check if the branch is master or main, if it is we run the workflow with the version 2.

We start with the build job which is required to run the other jobs.

Then we run the test job which is required to run the deploy job.

Then last we run the deploy job.