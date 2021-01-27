const readline = require('readline')

const rl = readline.createInterface(process.stdin)

rl.question('', (num1) => {
  rl.question('', (num2) => {
    console.log(+num1 + +num2)

    rl.close()
  })
})
