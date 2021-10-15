import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Content1 from './components/Content/Content1';
import Content2 from './components/Content/Content2';
import Content3 from './components/Content/Content3';
import Content4 from './components/Content/Content4';
import Content5 from './components/Content/Content5';
import Content6 from './components/Content/Content6';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div>
        	<Navbar />
			<Home />
			<Content1 />
			<Content2 />
			<Content3 />
			<Content4 />
			<Content5 />
			<Content6 />
			<Footer />
		</div>
	);
}

export default App;
