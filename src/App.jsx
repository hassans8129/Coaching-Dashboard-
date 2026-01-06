import "./App.css";
import Form from "./components/Form.jsx";
import Sidebar from "./components/sidebar.jsx";
function App() {
  return (
    <>
      <div className="flex min-h-screen font-sans">
        <Sidebar />
        <Form className="flex-1" />
      </div>
    </>
  );
}

export default App;
