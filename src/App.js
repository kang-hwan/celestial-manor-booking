import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DatePickerPage from "./pages/DatePickerPage";
import GuestPickerPage from "./pages/GuestPickerPage";
import RoomPickerPage from "./pages/RoomPickerPage";
import "./sass/style.css";

// TODO : Calendar DatePicker Restriction
// TODO : Setup Redux

function App() {
  const stepForm = useSelector((state) => state.stepForm.value);

  const renderForm = (i) => {
    let page;

    switch (i) {
      case 1:
        page = <GuestPickerPage />;
        break;

      case 2:
        page = <DatePickerPage />;
        break;

      case 3:
        page = <RoomPickerPage />;
        break;

      default:
        page = <GuestPickerPage />;
    }

    return page;
  };

  return (
    <div className="App">
      <Header />
      <div className="stepFormContainer">{renderForm(stepForm)}</div>
      <Footer />
    </div>
  );
}

export default App;
