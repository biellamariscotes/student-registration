/**
 *
 * Defines user-related data structure.
 * Used for registration, login, displaying users in the admin dashboard, and managing user info.
 *
 */

export interface Student {
  id?: Number;
  firstName: string;
  middleName: string;
  lastName: string;
  birthdate: string;
  address: string;
  course: string;
  age: Number;
}
