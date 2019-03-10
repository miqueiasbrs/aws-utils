const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const AWS = require('aws-sdk');
// Set credentials profile of aws cli ref: CodeCommit
AWS.config.credentials = new AWS.SharedIniFileCredentials({profile: 'CodeCommitBpp'});
// Set region of CodeCommit
AWS.config.region = 'us-east-1';

codecommit = async () => {
    let codecommit = new AWS.CodeCommit();
    let repos = await codecommit.listRepositories().promise();
    return repos.repositories;
}


clone = async (repo) => {
    // Directory for Cloning Repositories
    let dir = `${process.env.HOME}/git/${repo}`;

    if (!fs.existsSync(dir)) {
        console.log(`clone repo: ${repo} to ${dir}`);
        const stdout = await exec(`git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/${repo} -l ${dir}`);
        console.log(`clone repo: ${repo} finish`);
    }
    return null;
}

start = async () => {
    let repos = await codecommit();
    for (index in repos) {
        await clone(repos[index].repositoryName);
    }

    return null;
}

start();