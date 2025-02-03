export const FIELD_NAMES = {
  fullName: 'Full name',
  username: 'User Name',
  email: 'Email',
  password: 'Password',
};

export const FIELD_TYPES = {
  fullname: 'text',
  email: 'email',
  password: 'password',
};

export const adminSideBarLinks = [
  {
    img: '/icons/admin/home.svg',
    route: '/admin',
    text: 'Home',
  },
  {
    img: '/icons/admin/users.svg',
    route: '/admin/users',
    text: 'All Users',
  },
  {
    img: '/icons/admin/book.svg',
    route: '/admin/cars',
    text: 'Cars',
  },
  {
    img: '/icons/admin/bookmark.svg',
    route: '/admin/book-requests',
    text: 'Borrow Requests',
  },
  {
    img: '/icons/admin/user.svg',
    route: '/admin/account-requests',
    text: 'Account Requests',
  },
];
