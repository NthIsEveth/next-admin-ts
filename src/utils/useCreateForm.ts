import { BaseOnChange, JsonElements } from '@/components/Search/FormPanel';
import { useState } from 'react';

export default function useCreateForm(config: JsonElements) {
  const initForm = config.reduce((acc, cur) => {
    acc[cur.inputName] = cur.defaultValue;
    return acc;
  }, {});
  const [form, setForm] = useState(initForm);
  const baseOnChange: BaseOnChange = (val, key) => {
    form[key] = val;
    setForm({ ...form });
  };
  return { baseOnChange, form, setForm };
}
