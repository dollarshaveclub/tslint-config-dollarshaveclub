export function test () {
  const noSemiColons: String = 'please'
  console.log(noSemiColons)

  const trailingCommasPlease: Number[] = [
    1,
    2,
    3,
  ]

  console.log(trailingCommasPlease)

  async function foo () {
    const myArray: Number[] = [1, 2, 3]
    for (let somePromise of myArray) {
      let nonPromise: Number = await somePromise
      console.log(nonPromise)
    }
  }

  foo()
}
