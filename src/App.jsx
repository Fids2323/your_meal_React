import {Catalog} from "./components/Catalog/Catalog";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {ModalDelivery} from "./components/ModalDelivery/ModalDelivery";
import {ModalProduct} from "./components/ModalProduct/ModalProduct";
import {Navigation} from "./components/Navigation/Navigation";
import {Provider} from "react-redux";
import {store} from "./store";

export const App = () => {
	return (
		<Provider store={store}>
			<Header />
			<main>
				<Navigation />
				<Catalog />
			</main>
			<Footer />
			<ModalDelivery />
			<ModalProduct />
		</Provider>
	);
};
