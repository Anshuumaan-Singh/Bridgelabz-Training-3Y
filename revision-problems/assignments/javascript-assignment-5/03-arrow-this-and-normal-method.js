"use strict";

function createArrowUser() {
  return {
    name: "Anshuman Singh",
    showName: () => this.name
  };
}

const arrowUser = createArrowUser.call({});
console.log(`Arrow method this.name: ${arrowUser.showName()}`);

const correctedUser = {
  name: "Anshuman Singh",
  showName() {
    return this.name;
  }
};
console.log(`Normal method this.name: ${correctedUser.showName()}`);
