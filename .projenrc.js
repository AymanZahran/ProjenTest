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

  release: true,
  releaseBranches: 'master',
  releaseEveryCommit: true,

  // Publish to Npm
  releaseToNpm: true,

  // // Publish to Maven
  // publishToMaven: {
  //   mavenGroupId: '<your_package_group_id',
  //   mavenArtifactId: '<your_package_target_id>',
  //   javaPackage: '<your_java_package>',
  // },
  
  // Publish to Pypi
  publishToPypi: {
    distName: 'aymanzahrandist',
    module: 'aymanzahranmod',
  },

  // Publish to Nugget
  publishToNuget: {
    dotNetNamespace: 'aymanorg.aymanns',
    packageId: 'aymanpackage.aymanpackagename',
  },
});
project.synth();