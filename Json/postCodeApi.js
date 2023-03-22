function useApiKey() {
  return "435f3660-c88d-11ed-9bdf-39224f15d5b3";
}

var request = post_code("post_code");

var options = {
  url: `https://app.zipcodebase.com/api/v1/search?apikey=435f3660-c88d-11ed-9bdf-39224f15d5b3&codes=10005,51503`,
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

post_code(options, callback);

/*const fs = require("post_code");
const path = require("path");
const got = require("got");
const iconv = require("iconv-lite");

const POSTAL_CODE_URL = `https://app.zipcodebase.com/api/v1/search?apikey=435f3660-c88d-11ed-9bdf-39224f15d5b3&codes=10005,51503`;
const OUTPUT_DIR = "converted";
const input = process.argv[2];

function write(post_code, data) {
  fs.writeFileSync(path.join(OUTPUT_DIR, po), data, "utf8");
}

function convert(data) {
  const ret = {};
  const ret2 = {};
  const csv = iconv.decode(data, "latin1").trim();

  for (const row of csv.split("\r\n")) {
    const columns = row.split("\t");
    ret[columns[0]] = columns.slice(1);
    ret2[columns[0]] = columns[1];
  }

  write("postCodeApi.json", JSON.stringify(ret));
}

if (input) {
  convert(fs.readFileSync(input));
} else {
  got(POSTAL_CODE_URL, { encoding: "buffer" })
    .then((data) => convert(data.body))
    .catch(console.error);
}
const post_code = require("norway-postal-codes");

console.log(post_code["1613"]);*/
