const Contact = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-3xl text-yellow-700 flex justify-center font-semibold mb-4">Contact Us</h2>
   
    <form >
      <label className="block mb-2 font-medium">
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>
      <label className="block mb-2 font-medium">
        Email:
        <input
          type="email"
          name="email"
           placeholder="email"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>
      <label className="block mb-4 font-medium">
        Message:
        <textarea
          name="message"
        placeholder="enter your message"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
  );
};

export default Contact;
