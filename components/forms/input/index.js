export default function Input({ placeholder, value, onChange }) {
    const handleChange = (event) => {
        const value = event.target.value;
        onChange(value);
    }

    return(
        <input
            placeholder={placeholder} 
            className="bg-gray-200 py-3 px-6 rounded w-96"
            value={value}
            onChange={handleChange}
        />
    )
}