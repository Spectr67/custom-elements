let o = {
  x: 42,
}
let i = o
console.log(o.x)
o.x -= 9
console.log(o.x)

o.x = o.x - 9
console.log(o.x)

o = { x: 111 }
