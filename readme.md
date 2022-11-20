# RandomWordsGenerator

Minimal, Small, Easy library for generating Random words from English Dictionary.

```
import {RWG} from 'randomwordsgenerator';

let rwg = new RWG();

console.log(rwg.GetWords());
console.log(rwg.GetWords({count:132}));
```

<br/>

# Installation

This is NPM Library (Not a project). You can import this library and use its functionalty.

```
$ npm i randomwordsgenerator
```

# How to use it

## Create object of RWG Class

```
let rwg = new RWG()
```

## Parameters for GetWords

- count: _number_ - 5 default
- minLength: _number_ - 0 default
- maxLength: _number_ - 0 default
- exactLength: _number_ - 0 default
- mustContain: _string_ - undefined default

## Example

```
//get random 5 words
console.log(rwg.GetWords())

//get ranodm 15 words
console.log(rwg.GetWords({count:15}))

//get random 15 words with atleast length of 5
console.log(rwg.GetWords({count:15, minLength:5}))

//get random 15 words with atleast length of 5 and maximum of 9
console.log(rwg.GetWords({count:15, minLength:5, maxLength:9}))

//get random 15 words which includes specific sequence of char
console.log(rwg.GetWords({count:15, mustContain:"te"}))
```

You can use combination of those properties as per your requirements.
