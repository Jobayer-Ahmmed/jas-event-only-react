

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">If you have any inquiries or need assistance, feel free to reach out to us:</p>
      <ul className="mb-4">
        <li>Email: info@jasevent.com</li>
        <li>Phone: +123-456-7890</li>
        <li>Address: 1234 Event Avenue, City, Country</li>
      </ul>
      <p className="mb-2">Follow us on social media:</p>
      <ul>
        <li><a href="https://www.facebook.com/jasevent" className="text-blue-500">Facebook: JAS Event Facebook</a></li>
        <li><a href="https://twitter.com/jasevent" className="text-blue-500">Twitter: JAS Event Twitter</a></li>
        <li><a href="https://www.instagram.com/jasevent" className="text-blue-500">Instagram: JAS Event Instagram</a></li>
      </ul>
    </div>
  );
}

export default Contact;
