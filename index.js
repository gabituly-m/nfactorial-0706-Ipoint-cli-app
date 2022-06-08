#! /usr/bin/env node

const inquirer = require('inquirer');
const confirm = require('inquirer-confirm');
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: (answer) => {
        if(answer === ''){
          return 'Please enter a valid name!'
        }
        return true
      }
    },
    {
      type: 'list',
      name: 'product',
      message: 'What product are you looking for?',
      choices: ['MacBook', 'Iphone'],
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many of them do want?',
      validate: (answer) => {
        if(isNaN(answer)){
          return 'Please enter a valid number!'
        }
        if(answer == 0){
          return undefined
        }
        return true
      }
    }
  ]

console.log('-------------Ipoint Store-------------');
inquirer
  .prompt(questions)
    .then(answers => {
      const name  = answers.name;
      const quantity = answers.quantity;
      const product = answers.product;
      if(product === 'MacBook'){
        console.log(`Dear ${name}, ${product} has these types. Please choose one of them.`)
        inquirer.prompt([
        {
          type: 'list',
          name: 'typesmacbook',
          message: 'Latest Versions of MacBook',
          choices: ['Air M1 chip', 'Pro M1 chip', 'Air M2 chip', 'Pro M2 chip'],
        }])
        .then(answers => {
          const typeMacbook = answers.typesmacbook;
          if(typeMacbook == 'Air M1 chip'){
            let price = 899;
            console.log(`${answers.typesmacbook} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          else if(typeMacbook == 'Pro M1 chip'){
            let price = 1099;
            console.log(`${answers.typesmacbook} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          else if(typeMacbook =='Air M2 chip'){
            let price = 1099;
            console.log(`${answers.typesmacbook} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          else if(typeMacbook == 'Pro M2 chip'){
            let price = 1299;
            console.log(`${answers.typesmacbook} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          confirm('Do you confirm to buy?')
            .then(function confirmed() {
              console.log('Enjoy your purchase!');
            }, function cancelled() {
              console.log('Okay, please look around again!');
            });
        })

      }
      else if(product === 'Iphone'){
        console.log(`Dear ${name}, ${product} has these types. Please choose one of them.`)
        inquirer.prompt([
        {
          type: 'list',
          name: 'typesiphone',
          message: 'Latest Versions of Iphone',
          choices: ['13', '13 Pro', '13 Pro Max', 'SE'],
        }])
        .then(answers => {
          const typeIphone = answers.typesiphone;
          if(typeIphone === '13'){
            let price = 699;
            console.log(`${answers.typesiphone} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          else if(typeIphone == '13 Pro'){
            let price = 999;
            console.log(`${answers.typesiphone} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          else if(typeIphone == '13 Pro Max'){
            let price = 1299;
            console.log(`${answers.typesiphone} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          else if(typeIphone == 'SE'){
            let price = 429;
            console.log(`${answers.typesiphone} costs for $${price}!`);
            const totalPrice = quantity * price;
            console.log(`Total bill is $${totalPrice}`);
          }
          confirm('Do you confirm to buy?')
            .then(function confirmed() {
              console.log('Enjoy your purchase!');
            }, function cancelled() {
              console.log('Okay, please look around again!');
            });
        })

      }
    })
