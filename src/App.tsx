import { ThemeProvider } from "@mui/material";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { customTheme } from "./utils/muiConstants";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
