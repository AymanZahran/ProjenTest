const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayman Zahran',
  authorAddress: 'ah.zahran@outlook.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'ProjenTest',
  repositoryUrl: 'https://github.com/AymanZahran/ProjenTest.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */


  python: {
    distName: 'acme.hello-jsii',
    module: 'acme.hello_jsii',
  },

  publishToPypi: {
    distName: 'MyDist',
    module: 'MyModule',
  },
});
project.synth();