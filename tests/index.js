const exec = require('child_process').exec
const globby = require('globby')
const assert = require('assert')

const passingFiles = globby.sync(['tests/fixtures/**/pass/*.ts'])
const failingFiles = globby.sync(['tests/fixtures/**/fail/*.ts'])

const TSLINT_CMD = 'npx tslint -c tslint.js'

passingFiles.forEach((passingFilename) => {
  it(`${passingFilename} should pass linting`, (done) => {
    exec(`${TSLINT_CMD} ${passingFilename}`, (err, stdout, stderr) => {
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
    exec(`${TSLINT_CMD} ${failingFilename}`, (err, stdout, stderr) => {
      /* eslint no-console: 0 */
      assert(err)
      console.log(stdout)
      done()
    })
  })
})
