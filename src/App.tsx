import "./App.css";
import CreditCardValidator from "./components/CreditCardValidator/CreditCardValidator";
import { ToastProvider } from "./context/Toast/ToastProvider";

function App() {
  return (
    <main className="flex min-h-screen bg-brand-cream app">
      <ToastProvider>
        <CreditCardValidator />
      </ToastProvider>
    </main>
  );
}
export default App;
