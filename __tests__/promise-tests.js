'use strict';

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

defineTest(__dirname, 'transform', null, 'replaces-anonymous-thens');
defineTest(__dirname, 'transform', null, 'replaces-anonymous-catches');
defineTest(__dirname, 'transform', null, 'replaces-diff-locations');
defineTest(__dirname, 'transform', null, 'ignores-named-thens');
defineTest(__dirname, 'transform', null, 'ignores-named-catches');
defineTest(__dirname, 'transform', null, 'binds-vars');
