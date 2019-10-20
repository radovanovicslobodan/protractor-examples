const LoginPage = require('./pages/LoginPage');

describe('Onboarding Test', function() {
	const onboardingLink = element(by.linkText('Onboarding'));
	const searchInputField = $('[placeholder = "Name or Keyword"]');
	const activeStatus = element(by.xpath('(//multi-select-search/p)[1]/input'));
  	const completedStatus = element(by.xpath('(//multi-select-search/p)[2]/input'));
	const searchButton = $('button[ng-click="search()"]');
	const searchItem = element(by.xpath('//div[@title="Glenn Laird"]/parent::a'));

	const completedOnboardings = $$('span.green');
	const newHireTitle = $('h3[title="Glenn Laird"]');

	const newHireName = 'Glenn Laird';
	const onboardingPageTitle = 'Jobvite - List Of Onboardings';

	// URL
	const url = 'YOUR_URL';

	beforeAll(function() {
		LoginPage.loginTo(url);
	});

	it('should go to onboarding page', async () => {
		await onboardingLink.click();
    	await expect(browser.getTitle()).toEqual(onboardingPageTitle);
  	});

  	it('should filter onboarding processes by status', function (done) {
  		activeStatus.click();
  		completedStatus.click();
  		searchButton.click();
  		expect(completedOnboardings.count()).toBe(10);
  		done();
  	});

  	it('should search onboarding processes', function(done) {
  		searchInputField.sendKeys(newHireName);
  		activeStatus.click();
  		completedStatus.click();
  		searchButton.click();
  		searchItem.click();
  		expect(newHireTitle.isPresent()).toBe(true);
  		done();
  	});
})