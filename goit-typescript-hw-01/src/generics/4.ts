type User = {
name: string;
surname: string;
email: string;
password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
  const currentUser: User = {
    name: 'Anna',
    surname: 'Kamil',
    email: 'user1@mail.com',
    password: 'password',
  };
  const updatedUser = { ...currentUser, ...initialValues };
  return updatedUser;
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123'
});