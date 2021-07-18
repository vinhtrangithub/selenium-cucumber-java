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

### Technical Challenges:
1. The web application is HTML canvas based, which limits many possibilities i.e. difficult to identify DOM element and interacting with them.
2. Interacting with elements within canvas are possible using event support of the Actions Class API.
`moveToElement(WebElement target, int xOffset, int yOffset)`: Moves the mouse to an offset from the top-left corner of the element.
`new Actions(driver).moveToElement(canvas, xWithinCanvas, yWithinCanvas).click().perform();`
3. OCR technical for result.

### Limitations in this project:
1. Can't do any math with number that more than 2 digits. Only one digit allow.
2. Can't do any difficult math such as sin, cos, tan,....
3. Tried with different OCR libraries (such as AspriseOCR, TesseractOCR, api.ocr.space online). but it seems it works unstable.

### Manual Test cases for Calculator:
#### Basic Testcases
1. Check if the calculator has any specific preferences.
2. Check if all the numbers are working ( 0 to 9)
3. Check if the arithmetic keys ( +, -, *, %, /) are working.
4. Check if the clear key is working.
5. Check if the sum or equal key is working.
#### Functionality Testcases
1. Check the addition of two integer numbers.
2. Check the addition of two negative numbers.
3. Check the addition of one positive and one negative number.
4. Check the subtraction of two integer numbers.
5. Check the subtraction of two negative numbers.
6. Check the subtraction of one negative and one positive number.
7. Check the multiplication of two integer numbers.
8. Check the multiplication of two negative numbers.
9. Check the multiplication of one negative and one positive number.
10. Check the division of two integer numbers.
11. Check the division of two negative numbers.
12. Check the division of one positive number and one integer number.
13. Check the division of a number by zero.
14. Check the division of a number by negative number.
15. Check the division of zero by any number.
