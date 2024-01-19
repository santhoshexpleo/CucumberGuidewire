const{When,Then} = require('@cucumber/cucumber');
const{Loginpage} = require('../page/Loginpage');

let lp = new Loginpage();
 
 When('User is on Login page', async ()=> {
       await lp.navigate();
  });

  When('User enters the username', async()=>{
    await lp.navigate();
  });
  When('User enters password', async()=>{
    await lp.navigate();
  });

  When('User clicks on Login button', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await lp.navigate();
  });

  Then('user verify title', async()=> {
    // Write code here that turns the phrase above into concrete actions
    await lp.navigate();
  });
