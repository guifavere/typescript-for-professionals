type Person4 = {
  name: string;
  email?: string | null | undefined;
};

function sendEmail(email: string) {
  console.log('Sent email to ', email);
}

function ensureContactable(person: Person4) {
  if (person.email == null) throw new Error(`${person.name} has no email`);
}

function contact(person: Person4) {
  ensureContactable(person);
  sendEmail(person.email!);
}
