# Welcome to AutomationExercise Test Framework !

 **AutomationExercise Automation** is automation project for testing Signup, Login and Addtocart scenarios on website - https://automationexercise.com/.





## Development Build Setup

```bash
# pre-requisite dependencies (latest versions)
- npm
- node
```

```bash
# install dependencies
$ npm install

# open cypress dashboard and run test via cypress UI
$ npx cypress open

# run cypress in headless mode - all test cases
$ npx cypress run

# run cypress in headless mode - particular test cases
$ npx cypress run --spec "cypress/e2e/cart_Item/add_product.cy.js"

```
## HTML Report
```
file: index.html
path: cypress/reports
```


## Project Tree

```
📦 AutomationExercise Assignment
├─ .....
├─ cypress
│  ├─ e2e
│  │  ├─ cart_Item // test case related to adding item to cart
│  │  ├─ Login // test case related to user login
│  │  ├─ signup // test case related to user signup process
│  ├─ fixtures // test data
│  ├─ pages // page object repository
│  ├─ reports // HTML report
│  ├─ support // request function here
│  └─ .....
└─ .....
```

