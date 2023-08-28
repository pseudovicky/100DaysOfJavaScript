# matches, closest and contains
There are three important methods to search the DOM

1. elem.matches(CSS) - To cjeck if element matches the given css selector
2. elem.closest(CSS) - To look for the nearest ancestor that matches the given css selector. the elem itself is clso checked.
3. elemA.contains(elem) - Return ture if elemB is inside elemA (a descendant of elemA) or when elemA == elemB.