import React, { useState } from 'react';

/**
 * -- useState() --
 * 1. Define a initial value
 * 2. Define a state variable
 * 3. Pass its initial value
 * 4. Update a prop of the state variable value
 */
function HookStateForm() {
  const initialValue = {
    name: '',
    phone: ''
  };

  const [form, setForm] = useState(initialValue);

  return (
    <form>
      <label>
        Name:
        <input id="name" type="text" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} />
      </label>
      <br />
      <label>
        Phone:
        <input id="phone" type="tel" value={form.phone} onChange={event => setForm({ ...form, phone: event.target.value })} />
      </label>
      <p>{JSON.stringify(form)}</p>
    </form>
  )
}

export default HookStateForm;