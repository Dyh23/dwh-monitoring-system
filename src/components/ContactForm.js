import React from 'react';

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    console.log(`Name: ${name}, Email: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required />
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
