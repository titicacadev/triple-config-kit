import {
  massive1,
  massive2,
  massive3,
  massive4,
  massive5,
  massive6,
  massive7,
  massive8,
  massive9,
  massive10,
} from './export-massive'

const array = [1, 2, 3]
const multilineArray = [
  111111111111111111111,
  222222222222222222222,
  333333333333333333333,
  444444444444444444444,
  555555555555555555555,
]

const object = { a: 1, b: 2, c: 3 }
const multilineObject = {
  a: 111111111111111111111,
  b: 222222222222222222222,
  c: 333333333333333333333,
  d: 444444444444444444444,
  e: 555555555555555555555,
}

function f(aaaaa, bbbbb) {
  return { aaaaa, bbbbb }
}

function multilineF(
  aaaaa,
  bbbbb,
  ccccc,
  ddddd,
  eeeee,
  fffff,
  ggggg,
  hhhhh,
  iiiii,
  jjjjj,
) {
  return {
    aaaaa,
    bbbbb,
    ccccc,
    ddddd,
    eeeee,
    fffff,
    ggggg,
    hhhhh,
    iiiii,
    jjjjj,
  }
}
export {
  massive1,
  massive2,
  massive3,
  massive4,
  massive5,
  massive6,
  massive7,
  massive8,
  massive9,
  massive10,
  array,
  multilineArray,
  object,
  multilineObject,
  f,
  multilineF,
}
