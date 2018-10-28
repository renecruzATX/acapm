const readline = require('readline');
const fs = require("fs");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

if(process.argv[2] == "init"){
  process.exit();
}else if (fs.existsSync('./package.json')) {
    process.exit();
}else {
    rl.question('What is your package name?: ', (packageName) => {
        rl.question('Description of your package: ', (packageDescription) => {
          rl.question('Author: ', (packageAuthor) => {
            rl.question('Keywords: ', (packageKeywords) => {
              rl.question('Version: ', (packageVersion) => { 
                
                const packageJSON = {
                  package: packageName,
                  description: packageDescription,
                  author: packageAuthor,
                  keywords: packageKeywords,
                  version: packageVersion
                };  
                
                fs.writeFile('package.json', JSON.stringify(packageJSON, null, 4), (err) => {
                  if (err){
                    console.log('Error writing package.json to disk');
                  }else {
                      console.log('Package created successfully!');
                      
                  }
                  
                });
  
                rl.close();
              });
            });
          });
        });
      });
    }