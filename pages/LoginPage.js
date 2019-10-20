
'use strict';  
  
module.exports = {  
    loginFields: {  
        usernameField: element(by.id('UserName')), 
        passwordField: element(by.id('Password')),
		signInButton: element(by.id('btnLogin'))
    },  
      
    loginTo: function(url) { 
    	let login = this.loginFields; 
    	const username = 'YOUR_USERNAME';
		const password = 'YOUR_PASSWORD';

        browser.get(url);
        login.usernameField.sendKeys(username);
		login.passwordField.sendKeys(password);
		login.signInButton.click();
    }
};