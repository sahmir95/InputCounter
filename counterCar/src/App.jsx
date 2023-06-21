import { useState } from 'react';
import Input from './component/Input';
import Text from './component/Text'

function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <div className='Input-contaier'>
      <Input value={value} onChange={handleChange} />
      <Text value={value}/>
      </div>
    </div>
  );
}

export default App;