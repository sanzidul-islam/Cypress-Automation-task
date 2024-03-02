1. open folder in vs-code
2. open terminal then execute
   npm -i init   //create package.json file this is mendatory
     here some inpute will arive so just enter
3. install cypress
   npm install cypress --save -dev
4. start cypress
   npx cypress open
5. install cypress-xpath
   npm install -D cypress-xpath
   then go to commands.js and add  /// <reference types="cypress-xpath" />
   also go to e2e.js and add    require('cypress-xpath');
