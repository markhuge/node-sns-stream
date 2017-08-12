# sns-stream

Writable objectMode stream that accepts an SNS payload as input. 

## Abstract
WIP

I needed to send a shitton of SNS msgs from streaming data, but also wanted to ensure that my data was
queued before sending the next item.


## Installation

`npm install sns-stream`

## Usage

```javascript
const aws = require('aws-sdk');
const sns = require('sns-stream');

someStream()
  .pipe(sns(aws))
```
