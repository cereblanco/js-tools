const csv = require("csv-parser");
const fs = require("fs");
const results = [];

const file = "sample.csv";

const parseLine = (data) => {
  const { question_id, text, properties } = data;
  choices = properties.replace(/["']/g, "").replace("choices=", "").split(",");
  results.push({
    id: parseInt(question_id),
    question: text,
    choices: choices,
  });
};

const parser = fs
  .createReadStream(file)
  .pipe(csv())
  .on("data", (line) => parseLine(line))
  .on("end", () => {
    console.log(results);
    // [
    //   {
    //     id: 276,
    //     question: 'Which among the choices is the correct phrasal verb?',
    //     choices: [ 'result to', 'result in', 'result with' ]
    //   },
    //   {
    //     id: 277,
    //     question: 'Which among the choices is the correct phrasal verb?',
    //     choices: [ 'share to', 'share with', 'share from' ]
    //   },
    // ]
  });
