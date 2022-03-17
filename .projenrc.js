const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ayman Zahran',
  authorAddress: 'ah.zahran@outlook.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'ProjenTest',
  repositoryUrl: 'https://github.com/AymanZahran/ProjenTest.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */

  description: 'This package is for Projen Demo',
  docgen: true,

  // Publish to Npm
  release: true,
  releaseToNpm: true,
  packageName: 'aymanzahranpackage',
  releaseBranches: 'master',
  releaseEveryCommit: true,

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