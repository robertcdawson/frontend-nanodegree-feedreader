/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    // Test that the feed initializes properly
    describe('RSS Feeds', function() {

        // Ensure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Ensure that each feed in the `allFeeds` object has a URL defined
        it('has a URL defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
            }
        });

        // Ensure that each feed in the `allFeeds` object has a name defined
        it('has a name defined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
            }
        });

        // Ensure that each feed in the `allFeeds` object has a non-empty passed URL value
        it('has a non-empty URL value', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // Ensure that each feed in the `allFeeds` object has a non-empty passed name value
        it('has a non-empty name value', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBe('');
            }
        });

    });

    // Test that the menu functions properly
    describe('The menu', function() {

        // Initialize menu variables
        var menuHidden = $('.slide-menu').css('transform');
        var menuIconLink = $('.menu-icon-link');

        // Ensure that the menu element is hidden by default
        it('is hidden by default', function() {
            expect(menuHidden).not.toBe('matrix(1, 0, 0, 1, 0, 0)');
        });

        // Ensure that the menu changes visibility when the menu icon is clicked
        it('toggles when clicked', function() {
            menuIconLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIconLink.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    // Test that initial feed entries load correctly
    describe('Initial Entries', function() {

        // Ensure when the loadFeed function is called and completes its work,
        // there is at least a single .entry element within the .feed container
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it("should have at least one .entry element within the .feed container", function(done) {
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
        });

    });

    // Test that a new feed loads when an associated menu item is clicked
    describe('New Feed Selection', function() {

        // Initialize feed variables
        var feed0, feed1;

        // Ensure when a new feed is loaded by the loadFeed function, the content changes
        beforeEach(function(done){
            loadFeed(0, function() {
                // Get initial feed content
                feed0 = $('.feed').html();
                // Load second feed
                loadFeed(1, done); 
            });
        });

        it("should change the content", function(done) {
            // Get second feed content
            feed1 = $('.feed').html();
            // Test that feed0 and feed1 (first and second feeds) are not the same
            expect(feed0).not.toBe(feed1);
            done();
        });

        afterAll(function(done) {
            // Reload initial feed
            loadFeed(0, done); 
        });

    });

}());
