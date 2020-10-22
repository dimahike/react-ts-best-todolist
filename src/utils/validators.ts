export const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = (max: number) => (value: any) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength30 = maxLength(30);
export const maxLength200 = maxLength(200);
const minLength = (min: number) => (value: any) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength3 = minLength(3);
