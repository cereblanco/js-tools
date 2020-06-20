# CSV Parser

Converts a csv file into javascript objects

Example:

From

```csv
question_id,text,properties
276,Which among the choices is the correct phrasal verb?,"choices=""result to"",""result in"",""result with"""
277,Which among the choices is the correct phrasal verb?,"choices=""share to"",""share with"",""share from"""
```

to 

```javascript
 [
   {
     id: 276,
     question: 'Which among the choices is the correct phrasal verb?',
     choices: [ 'result to', 'result in', 'result with' ]
   },
   {
     id: 277,
     question: 'Which among the choices is the correct phrasal verb?',
     choices: [ 'share to', 'share with', 'share from' ]
   },
 ]
```

Usage:

```bash
yarn install
node sample-parser.js
```

