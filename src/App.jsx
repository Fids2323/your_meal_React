import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import React from "react";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Navigation />
				<Catalog />
			</main>
			<Footer />
		</>
	);
};

export default App;
