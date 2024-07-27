### 1. **Project Title and Description**
   - **Project Title**: String Calculator.
   - **Description**: This project implements a String Calculator using Angular, demonstrating Test-Driven Development (TDD) principles. The calculator can parse and sum numbers from a string, handle different delimiters, and manage errors like negative numbers..


### 2. **Installation**
   1. Clone the repository:
      ```
      git clone https://github.com/Harshakottur/string-calculator.git
      ```
   2. Navigate to the project directory:
      ```
      cd string-calculator
      ```
   3. Install dependencies:
      ```
      npm install
      ```
### 3. **Build**
   - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### 4. **Running Unit Tests**
   - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### 5. **Testing Strategy**
   - This project follows TDD principles. Tests were written before implementation, ensuring each feature is covered. Key test cases include:
   - Empty string should return 0
   - Single number should return the number itself
   - Multiple numbers should return their sum
   - Support for different delimiters
   - Error handling for negative numbers

