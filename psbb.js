const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("Input the number of families : ", (number) => {
    rl.question(
      `Input the number of members in the family \n(separated by a space) : `,
      (member) => {
        let familyMembers = member.split(" ");
        const members = familyMembers.join("");
        if (members.length !== +number) {
          console.log("Input must be equal with count of family");
          rl.close();
          return;
        }

        familyMembers = familyMembers.map((str) => {
          return parseInt(str, 10);
        });

        let totalMembers = familyMembers.reduce((a, b) => a + b, 0);
        let minBus = Math.ceil(totalMembers / 4);

        console.log("Minimum bus required is : ", minBus.toString());

        rl.close();
      },
    );
  });
}

main();
