//Task number 1
// 1. Type data Number. Type data number merupakan type data yang berbentuk bilangan bulat. ex: var number = 10
// 2. Type data String. Type data string merupakan type data yang berbentuk kata atau kalimat. ex: var str = "kata atau kalimat"
// 3. Type data Object. Type data object merupakan type data yang memiliki banyak variable dan value.
//     ex:
//     let obj = {
//       nama: "Galih",
//       age: 22
//     }
// 4. Type data Boolean. Type data boolean merupakan type data yang berbentu 'true' atau 'false'. ex: var bool = true
// 5. Type data Array. Type data array merupakan type data yang memiliki banyak string, number, atau object.
//     ex:
//     let arr = [
//       {
//         nama: "galih",
//         age: 22
//       },
//       {
//         nama: "aulia",
//         age: 21
//       }
//     ]

//#region Solution Task number 2 & 3
let inputDesc1 = ['D', 'H', 'S', 'A', 'G', 'F', 'D', 'O', 'I', 'O', 'U']
let inputDesc2 = [3, 2, 4, 5, 1, 6, 6]

function desc(input) {
  let output = []
  for (let x of input) {
    const find = output.find((current) => current == x)
    if (!find) output.push(x)
  }
  output.sort()
  output.reverse()

  return output
}

console.log(desc(inputDesc1))
console.log(desc(inputDesc2))

let inputCheck1 = 5
let inputCheck2 = 10

function check(input) {
  let output = []
  let key = null

  if (input % 2 == 0) {
    key = 'Genap'
  } else {
    key = 'Ganjil'
  }

  let length = input + 1
  switch (key) {
    case 'Genap':
      for (let i = 1; i < length; i++) {
        if (i % 2 == 0) {
          output.push(i)
        }
      }
      break
    case 'Ganjil':
      for (let i = 0; i < length; i++) {
        if (i % 2 != 0) {
          output.push(i)
        }
      }
      break
    default:
      break
  }

  return output
}

console.log(check(inputCheck1))
console.log(check(inputCheck2))
//#endregion
