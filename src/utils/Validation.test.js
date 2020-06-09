
import {validation} from './Validation';


const first_name_fails = "1234";
const first_name_pass = "example";
test('Test first name validation', () => {
  expect(validation("First Name", first_name_fails)).toEqual(true)
  expect(validation("First Name", first_name_pass)).toEqual(false)
})

const last_name_fails = "1234";
const last_name_pass = "example";
test('Test last name validation', () => {
  expect(validation("Last Name", last_name_fails)).toEqual(true)
  expect(validation("Last Name", last_name_pass)).toEqual(false)
})

const address_pass = "abcd1"
it('Test address validation', () => {  
  expect(validation("Address", address_pass)).toEqual(false)
});

const date ='30.06.2010';
test('Test Date of Birth validation', ()=> {
  expect(validation("Date of Birth", date)).toEqual(true)
})

const email_fails = "1234abcd";
const email_pass = "example@gmail.com";
test('Test email validation', () => {
  expect(validation("Email", email_fails)).toEqual(true)
  expect(validation("Email", email_pass)).toEqual(false)
})

const phone_fails = "abcde12";
const phone_pass = "11111111";
test('Test phone number validation', () => {
  expect(validation("Contact Number", phone_fails)).toEqual(true)
  expect(validation("Contact Number", phone_pass)).toEqual(false)
})

const gender_fails = "loremipsum"
const gender_pass = "Female";
test('Test Gender validation', ()=> {
  expect(validation("Gender", gender_fails)).toEqual(true)
  expect(validation("Gender", gender_pass)).toEqual(false)
})

const area_fails = "area1";
const area_pass = "Insurance";
test('Test Areas of Recommendation validation', ()=> {
  expect(validation("Areas of Recommendation", area_fails)).toEqual(true)
  expect(validation("Areas of Recommendation", area_pass)).toEqual(false)
})