import { checkHealth } from './index';

test('should return "healthy" if health is more than 50', () => {
  const character = { name: 'Маг', health: 90 };
  const result = checkHealth(character);
  expect(result).toBe('healthy');
});

test('should return "wounded" if health is between 15 and 50', () => {
  const character = { name: 'Маг', health: 30 };
  const result = checkHealth(character);
  expect(result).toBe('wounded');
});

test('should return "critical" if health is less than or equal to 15', () => {
  const character = { name: 'Маг', health: 10 };
  const result = checkHealth(character);
  expect(result).toBe('critical');
});