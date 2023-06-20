// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code
/*
// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);
*/
// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    getInstruction(
      "mashedPotatoes",
      2,
      (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 3, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;
        });
      },
      (error) => console.log(error)
    );
  });

  // Iteration 2 - using promises
  obtainInstruction("steak", 0).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    //  ... Your code here
    obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;

      obtainInstruction("steak", 2).then(
        (step2) => {
          document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;

          obtainInstruction("steak", 3).then((step3) => {
            document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
          });
        },
        (error) => console.log(error)
      );
    });
  });
  // ... Your code here

  // Iteration 3 using async/await
  // ...
  /* async function makeBroccoli() {
  
    try {
      await obtainInstruction("broccoli", 0, (step1)) => {
        document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
      }
      obtainInstruction("broccoli", 1).then((step1) => {
          document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    
          awiatobtainInstruction("steabroccolik", 2).then(
            (step2) => {
              document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    
              obtainInstruction("broccoli", 3).then((step3) => {
                document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
              });
            },
            (error) => console.log(error)

  }
    }
  // Bonus 2 - Promise all
  // ...
  */
});
