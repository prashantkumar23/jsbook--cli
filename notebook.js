[{"content":"# Welcome to my notebook\n\n\nHere is an example of a React component","type":"text","id":"3p4is"},{"content":"import { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCounter] = useState(0);\n\n  return <div>\n    <button onClick={() => setCounter(count + 1)}>Increase</button>\n    <h3> Count {count}</h3>\n  </div>;\n};\n\nshow(<Counter/>)","type":"code","id":"k4hd2"}]