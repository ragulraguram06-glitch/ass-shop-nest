function Contact() {
  return (
    <div className="container contact">
      <h1>Contact Us</h1>

      <form onSubmit={(e) => {
        e.preventDefault();
        alert("Message submitted!");
      }}>
        <input
          type="text"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          placeholder="Your Message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;