let obj = {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className: [
                    {
                      associatedDrug: [
                        {
                          name: "asprin",
                          dose: "",
                          strength: "500 mg",
                        },
                      ],
                      "associatedDrug#2": [
                        {
                          name: "somethingElse",
                          dose: "",
                          strength: "500 mg",
                        },
                      ],
                    },
                  ],
                  className2: [
                    {
                      associatedDrug: [
                        {
                          name: "asprin",
                          dose: "",
                          strength: "500 mg",
                        },
                      ],
                      "associatedDrug#2": [
                        {
                          name: "somethingElse",
                          dose: "",
                          strength: "500 mg",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          labs: [
            {
              missing_field: "missing_value",
            },
          ],
        },
      ],
      Asthma: [{}],
    },
  ],
};

console.log("--------------------------------------------------");
var { problems } = obj;
console.log("PROBLEMS");
console.log(problems);
var {
  problems: [{ Diabetes, Asthma }],
} = obj;
console.log("--------------------------------------------------");
console.log("Diabetes");
console.log(Diabetes);
console.log("--------------------------------------------------");
console.log("Asthma");
console.log(Asthma);
var {
  problems: [
    {
      Diabetes: [{ medications, labs }],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Medications");
console.log(medications);
console.log("--------------------------------------------------");
console.log("Labs");
console.log(labs);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [{ medicationsClasses }],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Medication Classes");
console.log(medicationsClasses);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [{ className, className2 }],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("ClassName");
console.log(className);
console.log("--------------------------------------------------");
console.log("ClassName2");
console.log(className2);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className: [{ associatedDrug }],
                  className2,
                },
              ],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Class Name 1 Associated Drug");
console.log(associatedDrug);
console.log("--------------------------------------------------");
console.log("Class Name 1 Associated Drug 2");
console.log(
  "It can't be accessed ....... since associatedDrug#2  is an invalid identifier"
);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className: [
                    {
                      associatedDrug: [{ name, dose, strength }],
                    },
                  ],
                  className2,
                },
              ],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Class Name 1 Associated Drug ......Name, Dose and strength");
console.log(name);
console.log(dose);
console.log(strength);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className: [
                    {
                      associatedDrug: [{ name, dose, strength }],
                      "associatedDrug#2": [{ name, dose, strength }],
                    },
                  ],
                  className2,
                },
              ],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Class Name 1 Associated Drug 2......Name, Dose and strength");
console.log(name);
console.log(dose);
console.log(strength);

var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className2: [{ associatedDrug }],
                  className,
                },
              ],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Class Name 2 Associated Drug");
console.log(associatedDrug);
console.log("--------------------------------------------------");
console.log("Class Name 2 Associated Drug 2");
console.log(
  "It can't be accessed ....... since associatedDrug#2 is an invalid identifier"
);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className2: [
                    {
                      associatedDrug: [{ name, dose, strength }],
                    },
                  ],
                  className,
                },
              ],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Class Name 2 Associated Drug ......Name, Dose and strength");
console.log(name);
console.log(dose);
console.log(strength);
var {
  problems: [
    {
      Diabetes: [
        {
          medications: [
            {
              medicationsClasses: [
                {
                  className2: [
                    {
                      associatedDrug: [{ name, dose, strength }],
                      "associatedDrug#2": [{ name, dose, strength }],
                    },
                  ],
                  className,
                },
              ],
            },
          ],
          labs,
        },
      ],
      Asthma,
    },
  ],
} = obj;
console.log("--------------------------------------------------");
console.log("Class Name 2 Associated Drug 2......Name, Dose and strength");
console.log(name);
console.log(dose);
console.log(strength);
