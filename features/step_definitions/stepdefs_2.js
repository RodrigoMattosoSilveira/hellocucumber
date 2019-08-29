const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is now {string}', function (givenDay) {
  this.today = givenDay;
});

When('I ask whether now it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told now is {string}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
