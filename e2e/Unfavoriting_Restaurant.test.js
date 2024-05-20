/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unfavoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Nothing to show here. Add your favorite restaurant', '.empty_content');
});
Scenario('should show the unfavorite button when the restaurant has been favorited before', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__item', 5);
  I.seeElement('.restaurant__item');
  // add fav resto
  const cardRestaurant = locate('.restaurant__content a').first();
  const firstCardRestaurant = await I.grabTextFrom(cardRestaurant);
  I.click(cardRestaurant);

  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // cancelling
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const favoritedCard = locate('.restaurant__content a').first();
  const favoritedCardRestaurant = await I.grabTextFrom(favoritedCard);
  // checking if the content are same or not
  assert.strictEqual(firstCardRestaurant, favoritedCardRestaurant);

  I.click(favoritedCard);
  // I.waitForElement('aria-label="unfavorite this restaurant"');
  I.seeElement('[aria-label="unfavorite this restaurant"]');
});
Scenario('cancel favoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__item', 5);
  I.seeElement('.restaurant__item');
  // add fav resto
  const cardRestaurant = locate('.restaurant__content a').first();
  const firstCardRestaurant = await I.grabTextFrom(cardRestaurant);
  I.click(cardRestaurant);

  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  // cancelling
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');
  const favoritedCard = locate('.restaurant__content a').first();
  const favoritedCardRestaurant = await I.grabTextFrom(favoritedCard);
  // checking if the content are same or not
  assert.strictEqual(firstCardRestaurant, favoritedCardRestaurant);

  I.click(favoritedCard);

  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.empty_content');

  const empty = await I.grabTextFrom('.empty_content');

  assert.strictEqual(empty, 'Nothing to show here. Add your favorite restaurant');
});
