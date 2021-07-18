$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calculator.feature");
formatter.feature({
  "line": 1,
  "name": "Test online calculator",
  "description": "",
  "id": "test-online-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "rows": [
    {
      "cells": [
        "value1",
        "\u003cvalue1\u003e"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "\u003cnegative1\u003e"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "\u003coperator\u003e"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "\u003cvalue2\u003e"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "\u003cnegative2\u003e"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see \u003cexpected\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;",
  "rows": [
    {
      "comments": [
        {
          "line": 14,
          "value": "#Positive cases"
        }
      ],
      "cells": [
        "value1",
        "negative1",
        "value2",
        "negative2",
        "operator",
        "expected"
      ],
      "line": 15,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;1"
    },
    {
      "cells": [
        "6",
        "N",
        "1",
        "N",
        "+",
        "7"
      ],
      "line": 16,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;2"
    },
    {
      "cells": [
        "9",
        "N",
        "7",
        "N",
        "-",
        "2"
      ],
      "line": 17,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;3"
    },
    {
      "cells": [
        "3",
        "N",
        "4",
        "N",
        "*",
        "12"
      ],
      "line": 18,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;4"
    },
    {
      "cells": [
        "8",
        "N",
        "2",
        "N",
        "/",
        "4"
      ],
      "line": 19,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;5"
    },
    {
      "cells": [
        "5",
        "N",
        "5",
        "N",
        "/",
        "1"
      ],
      "line": 20,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;6"
    },
    {
      "cells": [
        "3",
        "N",
        "2",
        "N",
        "/",
        "1.5"
      ],
      "line": 21,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;7"
    },
    {
      "comments": [
        {
          "line": 22,
          "value": "#Negative cases"
        }
      ],
      "cells": [
        "6",
        "Y",
        "1",
        "N",
        "+",
        "-5"
      ],
      "line": 23,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;8"
    },
    {
      "cells": [
        "9",
        "N",
        "7",
        "Y",
        "-",
        "16"
      ],
      "line": 24,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;9"
    },
    {
      "cells": [
        "8",
        "Y",
        "4",
        "N",
        "*",
        "-32"
      ],
      "line": 25,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;10"
    },
    {
      "cells": [
        "3",
        "Y",
        "2",
        "N",
        "/",
        "-1.5"
      ],
      "line": 26,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;11"
    },
    {
      "cells": [
        "3",
        "N",
        "0",
        "N",
        "/",
        "Error"
      ],
      "line": 27,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;12"
    },
    {
      "cells": [
        "0",
        "Y",
        "2",
        "N",
        "/",
        "0"
      ],
      "line": 28,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;13"
    },
    {
      "cells": [
        "9",
        "N",
        "8",
        "N",
        "/",
        "1.125"
      ],
      "line": 29,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;14"
    },
    {
      "cells": [
        "8",
        "Y",
        "9",
        "N",
        "/",
        "-0.88888889"
      ],
      "line": 30,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;15"
    },
    {
      "comments": [
        {
          "line": 31,
          "value": "#Boundary cases"
        }
      ],
      "cells": [
        "0",
        "Y",
        "0",
        "N",
        "+",
        "0"
      ],
      "line": 32,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;16"
    },
    {
      "cells": [
        "9",
        "N",
        "9",
        "Y",
        "-",
        "18"
      ],
      "line": 33,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;17"
    },
    {
      "cells": [
        "9",
        "N",
        "9",
        "N",
        "+",
        "18"
      ],
      "line": 34,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;18"
    },
    {
      "cells": [
        "0",
        "N",
        "9",
        "N",
        "/",
        "0"
      ],
      "line": 35,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;19"
    },
    {
      "cells": [
        "0",
        "N",
        "0",
        "N",
        "/",
        "Error"
      ],
      "line": 36,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;20"
    },
    {
      "cells": [
        "0",
        "Y",
        "0",
        "N",
        "*",
        "0"
      ],
      "line": 37,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;21"
    },
    {
      "cells": [
        "9",
        "N",
        "9",
        "N",
        "/",
        "1"
      ],
      "line": 38,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;22"
    },
    {
      "cells": [
        "9",
        "Y",
        "9",
        "N",
        "*",
        "-81"
      ],
      "line": 39,
      "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;23"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "6"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "+"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 7",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 6033212500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6756367000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 27604049000,
  "status": "passed"
});
formatter.after({
  "duration": 912000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "-"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "7"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 2",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 2076258500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6395209500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 7070972700,
  "status": "passed"
});
formatter.after({
  "duration": 112800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "3"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "*"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "4"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 12",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1229282700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6417505500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 7258150200,
  "status": "passed"
});
formatter.after({
  "duration": 193000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "8"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "2"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 4",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1103309500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6315327200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 4968145000,
  "status": "passed"
});
formatter.after({
  "duration": 366300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "5"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "5"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 1",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1173280100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6341399400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 3404646000,
  "status": "passed"
});
formatter.after({
  "duration": 306400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "3"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "2"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 1.5",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1204083700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6515287500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1073400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 22,
      "value": "#Negative cases"
    }
  ],
  "line": 23,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "6"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "+"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see -5",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1147586400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7614638900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-5",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 21426664400,
  "status": "passed"
});
formatter.after({
  "duration": 335900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "-"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "7"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "Y"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 16",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1235035200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7832056500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 9589473700,
  "status": "passed"
});
formatter.after({
  "duration": 381900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "8"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "*"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "4"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see -32",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1406944700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7620663200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-32",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 7011547400,
  "status": "passed"
});
formatter.after({
  "duration": 241600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "3"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "2"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see -1.5",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 920704000,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7647580100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 157200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "3"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "0"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see Error",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1584861100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6356279600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 189700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "0"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "2"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 0",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1118594800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7932482200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 5075766700,
  "status": "passed"
});
formatter.after({
  "duration": 395000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "8"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 1.125",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1235049800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6296256100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 133600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "8"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "9"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see -0.88888889",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 961910100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7726997400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 166700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#Boundary cases"
    }
  ],
  "line": 32,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "0"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "+"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "0"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 0",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1162343600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7718058700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 13119307700,
  "status": "passed"
});
formatter.after({
  "duration": 171400,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "-"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "9"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "Y"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 18",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1326376700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7744553600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 6906456100,
  "status": "passed"
});
formatter.after({
  "duration": 1639700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "+"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "9"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 18",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 945852100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6236710000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 4268331700,
  "status": "passed"
});
formatter.after({
  "duration": 436600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "0"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "9"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 0",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1059958300,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6372193000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 3411205400,
  "status": "passed"
});
formatter.after({
  "duration": 230200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "0"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "0"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see Error",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 871603500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6356127800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 254700,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "0"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "*"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "0"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 0",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1061845200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7938104800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 4178985400,
  "status": "passed"
});
formatter.after({
  "duration": 186200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "N"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "/"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "9"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see 1",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1010915900,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 6266200400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 9535454800,
  "status": "passed"
});
formatter.after({
  "duration": 349500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Test subtraction, division and CE functionalities",
  "description": "",
  "id": "test-online-calculator;test-subtraction,-division-and-ce-functionalities;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I navigate to \"https://www.online-calculator.com/full-screen-calculator/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter following values and press Equal button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "rows": [
    {
      "cells": [
        "value1",
        "9"
      ],
      "line": 6
    },
    {
      "cells": [
        "negative1",
        "Y"
      ],
      "line": 7
    },
    {
      "cells": [
        "operator",
        "*"
      ],
      "line": 8
    },
    {
      "cells": [
        "value2",
        "9"
      ],
      "line": 9
    },
    {
      "cells": [
        "negative2",
        "N"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see -81",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.online-calculator.com/full-screen-calculator/",
      "offset": 15
    }
  ],
  "location": "CommonSteps.navigate_to(String)"
});
formatter.result({
  "duration": 1605966400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.enterTheNumberButtonsAndEnter(DataTable)"
});
formatter.result({
  "duration": 7581631100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-81",
      "offset": 24
    }
  ],
  "location": "CalculatorSteps.SeeTheExpectedResult(String)"
});
formatter.result({
  "duration": 12814517900,
  "status": "passed"
});
formatter.after({
  "duration": 126600,
  "status": "passed"
});
});