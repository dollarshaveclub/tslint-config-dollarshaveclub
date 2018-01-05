/*
  tests
  ---

*/
const fs = require('fs')
const exec = require('child_process').exec
const path = require('path')
const test = require('mocha')
const globby = require('globby')

const passingFiles = globby.sync(['tests/fixtures/**/pass/*.js'])
const failingFiles = globby.sync(['tests/fixtures/**/fail/*.js'])

const TSLINT_BIN = require.resolve('tslint/bin/tslint')

passingFiles.forEach((passingFilename) => {
  it(`${passingFilename} should pass linting`, (done) => {
    exec(`${TSLINT_BIN} ${passingFilename}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err.stack)
        console.error(stdout.toString())
        console.error(stderr.toString())
        done(err)
        return
      }

      done()
    })
  })
})

failingFiles.forEach((failingFilename) => {
  it(`${failingFilename} should not pass linting`, (done) => {
    exec(`${TSLINT_BIN} ${failingFilename}`, (err, stdout, stderr) => {
      /* eslint no-console: 0 */
      assert(err)
      console.log(stdout)
      done()
    })
  })
})

