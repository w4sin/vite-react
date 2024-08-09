import { Navigate, Route, Routes } from "react-router-dom"
import Error404Page from "./pages/error/404"
import MainPage from "./pages/main"

function App() {

  return (
    <div className="main">
      <Routes>
        <Route index element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </div>
  )
}

export default App
