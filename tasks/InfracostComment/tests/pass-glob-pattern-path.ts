import setupRunner from './mock-helper';

const path = '"example*.json"'
const taskRunner = setupRunner({ path: path });

taskRunner.setInput('path', path);
taskRunner.setInput('githubToken', 'github-token');

taskRunner.run();
