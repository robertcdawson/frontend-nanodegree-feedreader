# Overview

In this project, you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# How to Run Test Suites

1. Open index.html in your browser.
1. Scroll to the bottom of the page and notice the green text.
1. Ensure that all of the following tests pass:
    1. Each feed in the `allFeeds` object should have a URL defined and a non-empty value.
    1. Each feed in the `allFeeds` object should have a name defined and a non-empty value.
    1. The menu element should be hidden by default.
    1. The menu should change visibility when the menu icon is clicked.
    1. When the `loadFeed` function is called and completes its work, there should be at least a single `.entry` element within the `.feed` container.
    1. When a new feed is loaded by the `loadFeed` function, the content should change.
1. If any tests fail, open jasmine/spec/feedreader.js to check the associated failing spec.