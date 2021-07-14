/* eslint-disable no-unused-vars */

import Character from '../Character';
import Bowman from '../Bowman';
import Magician from '../Magician';

test('Small name', () => {
  function char() { const character = new Character('I', 'Bowman'); }

  expect(char).toThrowError(new Error('Слишком короткое имя!'));
});
test('Long name', () => {
  function char() { const character = new Character('ImVeryLongName', 'Bowman'); }

  expect(char).toThrowError(new Error('Слишком длинное имя!'));
});
test('Absent name', () => {
  function char() { const character = new Character('', 'Bowman'); }

  expect(char).toThrowError(new Error('Введите имя!'));
});
test('Class', () => {
  function char() { const character = new Character('ImName', 'B'); }

  expect(char).toThrowError(new Error('Введите существующий класс!'));
});
test('Bowman', () => {
  const char = new Bowman('Denis', 'Bowman');

  expect(char.attack).toBe('25');
});
test('Magician', () => {
  const char = new Magician('Denis', 'Magician');
  char.range = 2;
  char.stoned = false;
  char.attack = '10';
  expect(char.attack).toBe(9);
});
test('Magician test 2', () => {
  const char = new Magician('Denis', 'Magician');
  char.range = 3;
  char.stoned = true;
  char.attack = '15';
  expect(char.attack).toBe(4);
});
test('Magician test =0', () => {
  const char = new Magician('Denis', 'Magician');
  char.range = 10;
  char.stoned = true;
  char.attack = '10';
  expect(char.attack).toBe(0);
});
test('Magician', () => {
  const char = new Magician('Denis', 'Magician');
  char.range = 12;
  char.stoned = false;
  char.attack = '10';
  expect(char.attack).toBe(0);
});
