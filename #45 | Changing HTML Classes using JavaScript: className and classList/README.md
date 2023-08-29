# ClassName and classlist
If we assign something to elem.className, it replaces the whole string of classes.

often we want to add/remove/toggle a single class.

1. elem.classlist.add/remove("class) - Adds/removes a class
2. elem.classlist.toggle("class") - Adds the class if it doesnt exist, otherwise remove it.
3. elem.classlist.contains('class') - checks for the given class, returns true/false



