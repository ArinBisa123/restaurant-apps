/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Nothing to show here. Add your favorite restaurant', '.empty_content');
});
Scenario('should show the favorite button when the restaurant has not been favorited before', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__item', 5);
  I.seeElement('.restaurant__item');
  // add fav resto
  const cardRestaurant = locate('.restaurant__content a').first();
  // const firstCardRestaurant = await I.grabTextFrom(cardRestaurant);
  I.click(cardRestaurant);

  // I.waitForElement('#favoriteButton');
  I.seeElement('[aria-label="favorite this restaurant"]');
});
Scenario('favoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');

  // I.waitForElement('.restaurant__content');
  // I.seeElement('.restaurant__content');
  I.waitForElement('.restaurant__item');
  I.seeElement('.restaurant__item');
  const cardRestaurant = locate('.restaurant__content a').first();
  const firstCardRestaurant = await I.grabTextFrom(cardRestaurant);
  I.click(cardRestaurant);

  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const favoritedCardRestaurant = await I.grabTextFrom('.restaurant__content a');
  assert.strictEqual(firstCardRestaurant, favoritedCardRestaurant);
  // pause();
});
