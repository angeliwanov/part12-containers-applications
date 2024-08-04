db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('persons');

db.persons.insert({
  name: 'Angel',
  number: '323-321-3421',
});

db.persons.insert({
  name: 'Emilia',
  number: '123-321-3421',
});
