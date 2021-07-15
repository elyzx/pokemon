import './App.css';
// import MyNav from './components/MyNav';
// import {Route, Switch} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Profile from './components/Profile';
// import NotFound from './components/NotFound'
import {Route} from 'react-router-dom'
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail'

function App() {

  // let name = 'Ellen'

  return (
    <>
      Gotta catch 'em all!
      <div style={{display: 'flex'}}>
        <PokemonList />
        <Route path={'/pokemon/:pokemonIndex'} component={PokemonDetail} />


        {/* <Route component={NotFound}/> */}
        {/* <MyNav /> */}
        {/* Switch ensure only one route is rendered at a time */}
        {/* <Switch> */}
            {/* Checks if the path in the url exactly mathces with / */}
            {/* <Route exact path={'/'} component={Profile} /> */}
            {/* Checks if the path in the url starts with /about */}

            {/* <Route path={'/about'}  component={About} /> */}

            {/* When you want to pass props yourself to components */}
            {/* <Route path={'/about'} render={(routeProps) => { 
                return <About name={name}  {...routeProps}/>
            }} /> */}

            {/* Handle dynamic props like this. Use the `:` */}
            {/* <Route path={'/home/:myName'}  component={Home} /> */}
        {/* </Switch> */}
      </div>
    </>
  );
}

export default App;
