
import Topbar from "./screens/global/Topbar"
import  {ColorModeContext,useMode} from "./theme"
import { CssBaseline,ThemeProvider } from "@mui/material"
import { Routes,Route } from "react-router-dom";


import Dashboard from "./screens/dashboard/Dashboard"
import Sidebar from "./screens/global/Sidebar"
import Team from "./screens/team/Team"
import Invoice from "./screens/invoice/Invoice"
import Bar from "./screens/bar/Bar"
import Calender from "./screens/calender/Calender"
import Contacts from "./screens/contact/Contacts"
import Faq from "./screens/faq/Faq"
import Form from "./screens/form/Form"
import Geography from "./screens/geography/Geography"
import Line from "./screens/line/Line"
import Pie from "./screens/pie/Pie"


const App = () => {
  const [ theme , colorMode ] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
               <Route path="/team" element={<Team/>}/> 
               <Route path="/invoices" element={<Invoice/>}/> 
               <Route path="/bar" element={<Bar/>}/> 
               <Route path="/calendar" element={<Calender/>}/> 
               <Route path="/contacts" element={<Contacts/>}/> 
               <Route path="/faq" element={<Faq/>}/> 
               <Route path="/form" element={<Form/>}/> 
               <Route path="/line" element={<Line/>}/> 
               <Route path="/pie" element={<Pie/>}/> 
               <Route path="/geography" element={<Geography/>}/> 
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
