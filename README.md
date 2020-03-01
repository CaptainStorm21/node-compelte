Javascript notes

'strict mode'
Accidentally creating global variables—You won’t be able to create a variable without the var, let, or const keywords.
Assigning variables that can’t be assigned—You can’t use undefined as a variable name, for example.
Using non-unique function parameter names or property names in an object lit-eral—You need to choose names that don’t repeat within the same scope when assigning values.


Modules, packages, and dependencies
Modules are individual JavaScript files containing code that pertains to a single concept, functionality, or library.

Packages may contain multiple modules or a single module. They’re used to group files offering relevant tools.

Dependencies are Node.js modules used by an application or another module. If a package is considered to be an application dependency, it must be installed (at the version specified by the application) before the application is expected to run successfully.

