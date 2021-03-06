import React from 'react'

export const InputEmail = () => {

    const { label, type = 'text' } = props;

    const [value, setValue] = useState('');
    const onChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
