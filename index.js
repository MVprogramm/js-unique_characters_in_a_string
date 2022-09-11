const str_1 = "abcdef"; // true
const str_2 = "1234567"; // true
const str_3 = "abcABC"; // true
const str_4 = "abcadef"; // false

function isUnique_1(string) {
  let result = true;

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (string.lastIndexOf(character) !== i) result = false;
  }

  console.log(result);
}

const isUnique_2 = (string) =>
  console.log(
    !string
      .split("")
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .some((a, index, arr) => arr[index] === arr[index + 1])
  );

const isUnique_3 = (string) =>
  console.log(string.length === new Set(string).size);

isUnique_1(str_1);
isUnique_1(str_2);
isUnique_1(str_3);
isUnique_1(str_4);

isUnique_2(str_1);
isUnique_2(str_2);
isUnique_2(str_3);
isUnique_2(str_4);

isUnique_3(str_1);
isUnique_3(str_2);
isUnique_3(str_3);
isUnique_3(str_4);
