describe('User Registration General customer & Shop owner', () => {
  it('General User Registration Activities with invalid inputs', () => {
    cy.visit('https://shop.hishabee.business/register')

    // Fill in the signup form
    cy.get('input[placeholder="Enter name"]').type('@98#.p', { force: true });
    // cy.get('input[placeholder="Enter email address"]').type('thatushar1@gmail.com', { force: true });
    // cy.get('input[placeholder="Enter Mobile number"]').type('01711579363', { force: true });
    cy.get('input[placeholder="Enter email address"]').type('thatushar1@9.com', { force: true });
    cy.get('input[placeholder="Enter Mobile number"]').type('0001711579363', { force: true });
    cy.get('input[placeholder="Enter postal code"]').type('111111', { force: true });
    //cy.get('input[placeholder="Enter postal code"]').type('1111', { force: true });
        
    cy.get('input[placeholder="Select Division"]').click({ force: true }).wait(700);
    // Now that the dropdown is expanded, locate the option
    cy.get('ul#vs1__listbox.vs__dropdown-menu').wait(700).contains('Dhaka').click({ force: true });

    cy.get('input[placeholder="Select Aistrict"]').click({ force: true }).wait(500);
    // Now that the dropdown is expanded, locate the option
    cy.get('ul#vs2__listbox.vs__dropdown-menu').contains('Dhaka').click({ force: true }).wait(500);
    
    cy.get('input[placeholder="Select Sub District"]').click({ force: true }).wait(700);
    // Now that the dropdown is expanded, locate the option
    cy.get('ul#vs3__listbox.vs__dropdown-menu').contains('#vs3__option-44','Uttara')
    .click({ force: true }).wait(500);

    cy.get("div[id='vs1__combobox'] span[class='vs__selected']")
    .should("exist").contains("Dhaka").wait(500);

    cy.get("div[id='vs2__combobox'] span[class='vs__selected']")
    .should("exist").contains("Dhaka").wait(500);

    cy.get("div[id='vs3__combobox'] span[class='vs__selected']")
    .should("exist").contains("Uttara").wait(500);

    cy.get('input[placeholder="Enter address"]').type('12345678', { force: true });
    // cy.get('input[placeholder="Enter password"]').type('12345', { force: true });
    // cy.get('input[placeholder="Enter Confirm password"]').type('12345', { force: true });
    cy.get('input[placeholder="Enter password"]').type(' ', { force: true });
    cy.get('input[placeholder="Enter Confirm password"]').type(' ', { force: true });
    //cy.get('#ct-1').check({ force: true }).wait(700);
    cy.get('button[type="submit"]').click({ force: true }).wait(700);

  //Assertion: Check if login is successful then logout and check if logout successful.
  if(cy.contains('div.noty_body', 'Successfully Register!')){
    console.log("Test Automation For registering a new user is Successful!!!");
  }
  cy.wait(1000);
  cy.url().should('eq', 'https://shop.hishabee.business/');
  cy.wait(7000);

  cy.get('a.hidesidebarinmobile').click({ force: true }).wait(1000);
  cy.url().should('eq', 'https://shop.hishabee.business/dashboard');
  cy.contains('a.nav-link', 'Logout').click({ force: true }).wait(1000);
  
  if(cy.contains('div.noty_body', 'Successfully Logout')){
    console.log("You have successfully logged out the last registered user now please login");
  }
  cy.url().should('eq', 'https://shop.hishabee.business/login');
  cy.wait(7000);


  // Now perform login action...
  cy.get('input[placeholder="Enter your Email Address Or Mobile"]')
  .type('thtushar1@gmail.com', { force: true }).wait(1000);
  cy.get('input[type="password"]').type('12345', { force: true }).wait(1000);
  cy.get('label[for= "ct-1"]').check({ force: true }).wait(700);
  cy.get('button[type="submit"]').click({ force: true }).wait(3000);
  
  if(cy.contains('div.noty_body', 'Successfully Logged!')){
    console.log("Test Automation for logging in an existing user is Successful!!!");
  }
  cy.wait(1000);
  cy.url().should('eq', 'https://shop.hishabee.business/');
  cy.wait(7000);

  // Now perform logout action again...
  cy.get('a.hidesidebarinmobile').click({ force: true }).wait(1000);
  cy.wait(3000);
  cy.url().should('eq', 'https://shop.hishabee.business/dashboard');
  cy.contains('a.nav-link', 'Logout').click({ force: true }).wait(1000);
  
  if(cy.contains('div.noty_body', 'Successfully Logout')){
    console.log("You have successfully logged out the last registered user now please login");
  }
  cy.url().should('eq', 'https://shop.hishabee.business/login');    
  });

  it('General User Registration Activities with valid inputs', () => {
    cy.visit('https://shop.hishabee.business/register')

    // Fill in the signup form
    cy.get('input[placeholder="Enter name"]').type('Towkir Hassan Tushar', { force: true });
    cy.get('input[placeholder="Enter email address"]').type('thatushar1@gmail.com', { force: true });
    cy.get('input[placeholder="Enter Mobile number"]').type('01711579363', { force: true });
    cy.get('input[placeholder="Enter postal code"]').type('1111', { force: true });
        
    cy.get('#vs1__combobox').click({ force: true }).wait(700);
    // Now that the dropdown is expanded, locate the option
    cy.get('ul#vs1__listbox.vs__dropdown-menu').wait(700).contains('Dhaka').click({ force: true });

    cy.get('#vs2__combobox').click({ force: true }).wait(500);
    // Now that the dropdown is expanded, locate the option
    cy.get('ul#vs2__listbox.vs__dropdown-menu').contains('Dhaka').click({ force: true }).wait(500);
    
    cy.get('#vs3__combobox').click({ force: true }).wait(700);
    // Now that the dropdown is expanded, locate the option
    cy.get('ul#vs3__listbox.vs__dropdown-menu').contains('#vs3__option-44','Uttara')
    .click({ force: true }).wait(500);

    cy.get("div[id='vs1__combobox'] span[class='vs__selected']")
    .should("exist").contains("Dhaka").wait(500);

    cy.get("div[id='vs2__combobox'] span[class='vs__selected']")
    .should("exist").contains("Dhaka").wait(500);

    cy.get("div[id='vs3__combobox'] span[class='vs__selected']")
    .should("exist").contains("Uttara").wait(500);

    cy.get('input[placeholder="Enter address"]').type('Sector 6 Uttara', { force: true });
    cy.get('input[placeholder="Enter password"]').type('12345', { force: true });
    cy.get('input[placeholder="Enter Confirm password"]').type('12345', { force: true });
    cy.get('#ct-1').check({ force: true }).wait(700);
    cy.get('button[type="submit"]').click({ force: true }).wait(700);

    // Assertion: Check if login is successful then logout and check if logout successful.
    if(cy.contains('div.noty_body', 'Successfully Register!')){
      console.log("Test Automation For registering a new user is Successful!!!");
    }
    cy.wait(1000);
    cy.url().should('eq', 'https://shop.hishabee.business/');
    cy.wait(7000);

    cy.get('a.hidesidebarinmobile').click({ force: true }).wait(1000);
    cy.url().should('eq', 'https://shop.hishabee.business/dashboard');
    cy.contains('a.nav-link', 'Logout').click({ force: true }).wait(1000);
    
    if(cy.contains('div.noty_body', 'Successfully Logout')){
      console.log("You have successfully logged out the last registered user now please login");
    }
    cy.url().should('eq', 'https://shop.hishabee.business/login');
    cy.wait(7000);


    // Now perform login action...
    cy.get('input[placeholder="Enter your Email Address Or Mobile"]')
    .type('thtushar1@gmail.com', { force: true }).wait(1000);
    cy.get('input[type="password"]').type('12345', { force: true }).wait(1000);
    cy.get('label[for= "ct-1"]').check({ force: true }).wait(700);
    cy.get('button[type="submit"]').click({ force: true }).wait(3000);
    
    if(cy.contains('div.noty_body', 'Successfully Logged!')){
      console.log("Test Automation for logging in an existing user is Successful!!!");
    }
    cy.wait(1000);
    cy.url().should('eq', 'https://shop.hishabee.business/');
    cy.wait(7000);

    // Now perform logout action again...
    cy.get('a.hidesidebarinmobile').click({ force: true }).wait(1000);
    cy.wait(3000);
    cy.url().should('eq', 'https://shop.hishabee.business/dashboard');
    cy.contains('a.nav-link', 'Logout').click({ force: true }).wait(1000);
    
    if(cy.contains('div.noty_body', 'Successfully Logout')){
      console.log("You have successfully logged out the last registered user now please login");
    }
    cy.url().should('eq', 'https://shop.hishabee.business/login');    
  });


//Register a e-cmmerce shop owner within the website....

it('General user login', () => {

  cy.visit('https://shop.hishabee.business/login');  

  cy.get('input[placeholder="Enter your Email Address Or Mobile"]')
  .type('thtushar1@gmail.com', { force: true }).wait(1000);
  cy.get('input[type="password"]').type('12345', { force: true }).wait(1000);
  //cy.get('input#ct-1').check({ force: true }).wait(700);
  cy.get('button[type="submit"]').click({ force: true }).wait(3000);
});

it('Shop owner registration Activities', () => {
  cy.visit('https://web.hishabee.business/sign-in');
  // Fill in the signup form
  cy.get('input[placeholder="01521xxxxxx"]').type('01558209121', { force: true }).wait(700);
  cy.get("button[type='submit']").click({ force: true }).wait(700);
  cy.wait(1000);

  cy.url().should('eq', 'https://web.hishabee.business/register/verify');
  cy.get('input[placeholder="000000"]').type('123456', { force: true });
  cy.get('button[type="submit"]').click({ force: true }).wait(700);
  cy.get('a[href="JavaScript:void(0);"]').click({force: true});

  cy.url().should('eq', 'https://web.hishabee.business/select/shop');
  cy.get('button[type="button"]').click({ force: true }).wait(700);

  cy.url().should('eq', 'https://web.hishabee.business');
  cy.wait(7000);

  // Now perform logout action again...
  cy.get('i.fas.fa-power-off').click({ force: true }).wait(1000);
  cy.wait(3000);
  cy.url().should('eq', 'https://web.hishabee.business/sign-in');   
  });

it('Shop owner login Activities', () => {
  cy.visit('https://web.hishabee.business/sign-in');

  // Fill in the signup form
  cy.get('input[placeholder="01521xxxxxx"]').type('01920823028', { force: true }).wait(700);
  cy.get("button[type='submit']").click({ force: true }).wait(700);
  cy.wait(1000);

  cy.url().should('eq', 'https://web.hishabee.business/sign-in/pin');
  cy.get("input[placeholder ='00xxx']").type('12345', { force: true });
  cy.get('a.bg-light.p-2').click({ force: true }).wait(5000);
  cy.get('a.bg-light.p-2').click({ force: true });
  cy.get('button[type="submit"]').click({ force: true }).wait(700);

  cy.url().should('eq', 'https://web.hishabee.business/select/shop');
  cy.get('button[type="button"]').click({ force: true }).wait(700);

  cy.url().should('eq', 'https://web.hishabee.business');

// Assertion: Check if login is successful then logout and check if logout successful.
if(cy.contains('div.noty_body', 'Successfully Register!')){
  console.log("Test Automation For registering a new user is Successful!!!");
}
cy.wait(1000);
cy.url().should('eq', 'https://shop.hishabee.business/');
cy.wait(7000);

cy.get('a.hidesidebarinmobile').click({ force: true }).wait(1000);
cy.url().should('eq', 'https://shop.hishabee.business/dashboard');
cy.contains('a.nav-link', 'Logout').click({ force: true }).wait(1000);

if(cy.contains('div.noty_body', 'Successfully Logout')){
  console.log("You have successfully logged out the last registered user now please login");
}
cy.url().should('eq', 'https://shop.hishabee.business/login');
cy.wait(7000);


// Now perform login action...
cy.get('input[placeholder="Enter your Email Address Or Mobile"]')
.type('thtushar1@gmail.com', { force: true }).wait(1000);
cy.get('input[type="password"]').type('12345', { force: true }).wait(1000);
cy.get('button[type="submit"]').click({ force: true }).wait(3000);

if(cy.contains('div.noty_body', 'Successfully Logged!')){
  console.log("Test Automation for logging in an existing user is Successful!!!");
}
cy.wait(1000);
cy.url().should('eq', 'https://web.hishabee.business/register/verify');
cy.wait(7000);

// Now perform logout action again...
cy.get('a.hidesidebarinmobile').click({ force: true }).wait(1000);
cy.wait(3000);
cy.url().should('eq', 'https://shop.hishabee.business/dashboard');
cy.contains('a.nav-link', 'Logout').click({ force: true }).wait(1000);

if(cy.contains('div.noty_body', 'Successfully Logout')){
  console.log("You have successfully logged out the last registered user now please login");
}
cy.url().should('eq', 'https://shop.hishabee.business/login');    
});


it('add product', () => {
cy.get('a[href="https://web.hishabee.business/purchase"]').click({force:true}).wait(700);
cy.get('button.btn p-2').click({force:true});
});
})
