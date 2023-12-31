import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DatePickerPage from "./pages/DatePickerPage";
import GuestPickerPage from "./pages/GuestPickerPage";
import RoomPickerPage from "./pages/RoomPickerPage";
import "./sass/style.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CheckOutPage from "./pages/CheckOutPage";

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

      case 4:
        page = <CheckOutPage />;
        break;

      default:
        page = <GuestPickerPage />;
    }

    return page;
  };

  return (
    <div className="App">
      <Header />
      <div className="stepFormContainer">
        <TransitionGroup>
          <CSSTransition key={stepForm} timeout={1500} classNames="fade">
            {renderForm(stepForm)}
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}

export default App;
