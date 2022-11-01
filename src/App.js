import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './components/Counter'
import Countries from './components/Countries';
import Form1 from './components/Form1'
import Form2 from './components/pages/Form2'
import Formik1 from './components/Formik1'
import Formik2 from './components/Formik2'
import Props from './components/Props';
import Lazyloading from './components/Lazyloading'
import Notfound from './components/Notfound'

function App() {
   const carName = "Ford";
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Counter' component={Counter} />
        <Route path='/Countries' component={Countries} />
        <Route path='/Form1' component={Form1} />
        <Route path='/Formik1' component={Formik1} />
        <Route path='/Formik2' component={Formik2} />
        <Route path='/Props' component={Props} />
        <Route path='/Lazyloading' component={Lazyloading} />
        <Route path='/Form2' component={Form2} />
        <Route path='/*' component={Notfound} />
      </Switch>
      
    </Router>
  );
}

export default App
