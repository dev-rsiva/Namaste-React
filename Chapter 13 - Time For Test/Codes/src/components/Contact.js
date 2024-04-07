const Contact = () => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl p=4 m-4 ">Contact Us</h1>
      <form>
        <input
          type="text"
          value=""
          placeholder="name"
          className="border border-black m-2 p-2"
        />
        <input
          type="text"
          value=""
          placeholder="message"
          className="border border-black m-2 p-2"
        />
        <button className="border border-black m-2 p-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
