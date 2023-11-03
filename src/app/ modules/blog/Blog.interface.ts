export type IUserFilters = {
  searchTerm?: string;
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  role?: 'admin' | 'user';
};
