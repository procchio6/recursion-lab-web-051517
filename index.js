function printString(string) {
  console.log(string[0])

  if (string.length > 1) {
    printString(string.substring(1))
  }
}

function reverseString(string) {
  if (string.length == 0) {
    return ''
  } else {
    return string[string.length-1] + reverseString(string.substring(0,string.length - 1))
  }
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  } else if (string[0] === string[string.length-1]) {
    return isPalindrome(string.substring(1, string.length-1))
  } else {
    return false
  }
}

function addUpTo(array, index) {
  if (index === 0) {
    return array[0]
  }
  return array[index] + addUpTo(array, index-1)
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  }

  if (array[0] > array[array.length-1]) {
    return maxOf(array.slice(0, array.length-1))
  } else {
    return maxOf(array.slice(1, array.length))
  }
}

function includesNumber(array, number) {
  if (array.length === 0) {
    return false
  } else if (array[0] === number) {
    return true
  } else {
    return includesNumber(array.slice(1), number)
  }
}
