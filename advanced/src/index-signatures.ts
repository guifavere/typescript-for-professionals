interface PersonA {
  displayName: string;
  email: string;
}

interface PersonDictionary {
  [username: string]: PersonA | undefined;
}

const persons: PersonDictionary = {
};

persons['john'] = { displayName: 'John Doe', email: 'john@example.com' };

delete persons['john'];

const result = persons['missing'];
