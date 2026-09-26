function Contact() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Contact Me</h1>

      <p>
        Feel free to connect with me regarding
        projects, internships, or collaboration.
      </p>

      <br />

      <h3>Email</h3>
      <p>your-email@example.com</p>

      <h3>GitHub</h3>
      <a
        href="https://github.com/tanishkagadge12"
        target="_blank"
        rel="noreferrer"
      >
        GitHub Profile
      </a>

      <br />
      <br />

      <h3>LinkedIn</h3>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn Profile
      </a>
    </div>
  );
}

export default Contact;