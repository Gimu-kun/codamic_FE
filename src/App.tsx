import PrivateRoutes from "./routes/PrivateRoutes"
import PublicRoutes from "./routes/PublicRoutes"



function App() {
  return (
    <>
      <PrivateRoutes></PrivateRoutes>
      <PublicRoutes></PublicRoutes>
    </>
  )
}

export default App
