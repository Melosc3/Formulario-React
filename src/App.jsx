import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Form from './components/form';

function App() {
  return (
    <div className='bg-[#121214] flex justify-center w-full h-80 absolute top-0 left-0'>
      <div className='w-auto'>
      <Header />

      <Form />      

      <Footer />
      </div>
    </div>
  );
}

export default App;
