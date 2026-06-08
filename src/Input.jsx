function Input({ text, placeholder, type, onChange, name }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1">{text}</label>

      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
