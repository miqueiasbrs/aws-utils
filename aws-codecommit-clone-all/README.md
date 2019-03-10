# aws-codecommit-clone-all
Clone all CodeCommit repositories

## Configure

* Define the profile configured in aws cli's code commit as shown below
    > AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'CodeCommitBpp'});
/
* Define the CodeCommit region
    > AWS.config.region = 'us-east-1';

* Defines the directory that will be made the clone of the repositories
    > let dir = `${process.env.HOME}/git/${repo}`;

## Install

* Run commands
    > npm install

## Run

* To run the script run the command below
    > node clone.js