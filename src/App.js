import "./App.css";
import Header from "./components/Header";
import EmailForm from "./components/EmailForm";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<EmailForm />
			<Dashboard />
			<Footer />
		</div>
	);
}

export default App;
