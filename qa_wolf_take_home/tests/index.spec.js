// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
import { test, expect } from '@playwright/test';
import { Utils } from '../utils';
import { HackerNewsMainPage } from '../hacker-news-main-page';


test.describe('Hacker News Main Page', () => {

  test.beforeEach(async ({page, context, browser}) => {
    await Utils.setBrowser(page, context, browser);
  }),

  test('Can retrieve the top 10 posts ', async () => {
    await Utils.navigateTo("https://news.ycombinator.com");
    await HackerNewsMainPage.getXnumberOfTopPostsData(10);
  });

  // test('Can navigate to expected url of top posts', async () => {
    
  // });


});
