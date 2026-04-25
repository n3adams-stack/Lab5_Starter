// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('checking real phone number', () => {
    expect(isPhoneNumber("234-923-8923") == true);
});
test('checking fake phone number', () => {
    expect(isPhoneNumber("23a23429343") == false);
});

test('checking weak password', () => {
    expect(isStrongPassword("hithere") == false);
});
test('checking strong password', () => {
    expect(isStrongPassword("98asdWEFughvisdsd892=-as3") == true);
});