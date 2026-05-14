export default function Quote() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Get a Quote</h1>

      {/* Your quote form should go here */}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>

        <br /><br />

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
