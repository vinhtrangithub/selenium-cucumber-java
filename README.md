## selenium-cucumber-java

### Installation (pre-requisites)

1. JDK 1.8+ (make sure Java class path is set)
2. Maven (make sure .m2 class path is set)
3. IntelliJ
4. IntelliJ Plugins for
   - Maven
   - Cucumber
5. Browser driver (make sure you have your desired browser driver and class path is set)

### Run Tests
To run features on specific browser use, `mvn test "-Dbrowser=browser_name"`
browser_name can be one of following but make sure that browser’s driver file are present and specified in system
variable. -- firefox -- chrome -- ie -- safari etc.
`mvn test "-Dbrowser=chrome"`

##Technical Challenges:
1. The web application is HTML canvas based, which limits many possibilities i.e. difficult to identify DOM element and interacting with them.
2. Interacting with elements within canvas are possible using event support of the Actions Class API.
`moveToElement(WebElement target, int xOffset, int yOffset)`: Moves the mouse to an offset from the top-left corner of the element.
`new Actions(driver).moveToElement(canvas, xWithinCanvas, yWithinCanvas).click().perform();`
3. OCR technical for result.

##Limitations in this project:
1. Can't do any math with number that more than 2 digits. Only one digit allow.
2. Can't do any difficult math such as sin, cos, tan,....
3. Tried with different OCR libraries (such as AspriseOCR, TesseractOCR, api.ocr.space online). but it seems it works unstable.

##Manual Test cases for Calculator:
