#!/usr/bin/env node

const path = require('path')
const { program } = require('commander')
const shell = require('shelljs')
const version = require('../package.json').version

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

const dirName = path.basename(process.cwd())
const date = new Date()
const year = '' + date.getFullYear()
const month = ('0' + (date.getMonth() + 1)).slice(-2)
const day = ('0' + date.getDate()).slice(-2)
const dateStr = year + month + day

program.version(version, '-v, --version')

program
  .argument('<featureName>')
  .description('create new featureName!')
  .action(featureName => {
    const branchName = dateStr + '_' + dirName + '_' + featureName
    shell.exec('git checkout -b ' + branchName)
  })

program.parse(process.argv)
