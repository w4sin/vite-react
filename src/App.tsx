import { Navigate, Route, Routes } from "react-router-dom"
import Error404Page from "./pages/error/404"
import MainPage from "./pages/main"

function App() {

  return (
    <Routes>
      <Route index element={<Navigate to="main" replace />} />
      <Route path="main" element={<MainPage />} >
        <Route path="about_me" element={<Error404Page />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  )
}

export default App
