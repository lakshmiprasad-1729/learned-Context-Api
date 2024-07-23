import './index.css'
import { ContextProvider } from './context-api/Context'
import Input1 from './components/input1'
import Input2 from './components/Input2'
function App() {
   return(
     <ContextProvider >
     <h1>welcome you must learn state management for bigger projects</h1>
     <Input1/>
     <Input2/>
     </ContextProvider>
   )
}

export default App
