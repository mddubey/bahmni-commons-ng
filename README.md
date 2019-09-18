# bahmni-commons-ng
This repository contains extracted common angular modules form [openmrs-module-bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps).

## User Documentation

### Installation
```
To be done
```

## Developer Documentation

### Setup 
```
git clone git@github.com:Bahmni/bahmni-commons-ng.git
cd bahmni-commons-ng
npm install
npm run bundle
```
Above steps will generate a dist folder with a output js file for each module.


### Adding a new module
Below is the structure of project:
<pre>
|--src
    |-- module-1
        |-- init.js
        |-- views
        |-- directives
        |-- filters
        |-- components
        |-- services
    |-- module-2
        |-- init.js
        ....
    |.......	
    |-- module-n
        |-- init.js
        ....
|--test
    |-- module-1
    |-- module-2
    |.......	
    |-- module-n
|-- dist
|-- package.json
|-- webpack.config.json
|-- karma.config.js
</pre>
* All modules are present in `src` folder in the root of the project.
* By convention, every module should have an `init.js` file. This would be mentioned in the `entry` for the `webpack.config.js`.
* The key for the `entry` will be used to generate the bundled file.

### Running tests
- The unit are run using [Karma](https://karma-runner.github.io/latest/index.html).
- TO run the tests run:
    ```
    npm run test
    ```  

### Expose templates from a module
Right now there are two ways the templates are exposed from module.
* We can expose the template as part of a directive. E.g. `bahmni-patient-commons/directives/patientSummary.js` defines a directive `patientSummary` which exposes `patientSummary.html` template.
* The templates can be provided in the `$templateCache` directly. The applications using these should look for these templates from `$templateCache` using the `key`. The `key` used to put the template must be documented. E.g. `ui-helper/init.js` exposes common templates which are used across components.

#### Template Cache by modules
| Module | Key in TemplateCache | Template Path |
| ------ | :-------------------:| ------------ |
| ui-helper | ui-helper-error | ui-helper/error.html |
| ui-helper | ui-helper-header | ui-helper/header.html |
| ui-helper | ui-helper-messages | ui-helper/messages.html |
| ui-helper | ui-helper-save-confirmation | ui-helper/views/saveConfirmation.html |

### TODO
* Skipping tests in `test/bahmni-domain-commons/services/programService.spec.js` since `programService` uses `programHelper` very specific to `programs`.   
