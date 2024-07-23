import './index.css'
import { Card ,ThemeBtn } from './components/index'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect, useState } from 'react'
function App() {
  
  const [ThemeMode,setThemeMode] = useState('light');

  const LightTheme=()=>{
    setThemeMode('light');
  }

  const DarkTheme=()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
     document.querySelector('html').classList.remove('light','dark')
     document.querySelector('html').classList.add(ThemeMode)
    
  },[ThemeMode])


  return (
    
         <ThemeProvider value={{ThemeMode,DarkTheme,LightTheme}}>
           <div className="flex flex-wrap min-h-screen items-center ">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/** button */}
                      <ThemeBtn/>

                  </div>
                  <div className="w-full max-w-sm mx-auto">
                     {/** post card */}
                     <Card/>
                  </div>
              </div>
            </div>
         </ThemeProvider>

  )
}

export default App
