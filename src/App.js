import Footer from "./components/Footer";
import Header from "./components/Header";
import DatePickerPage from "./pages/DatePickerPage";
import GuestPickerPage from "./pages/GuestPickerPage";
import RoomPickerPage from "./pages/RoomPickerPage";
import "./sass/style.css";
function App() {
  return (
    <div className="App">
      <Header />
      <GuestPickerPage />
      <DatePickerPage />
      <RoomPickerPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
