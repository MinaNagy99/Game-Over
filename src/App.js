import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Component/Layout/Layout.jsx';
import Login from './Component/Login/Login.jsx';
import Resgister from './Component/Register/Resgister.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import Home from './Component/Home/Home.jsx';
import ItemDetails from './ItemDetails/ItemDetails.jsx';
import GameContextProvider from './context/gamesContext.js';
import Shooter from './Component/Category/Shooter.jsx';
import Racing from './Component/Category/Racing.jsx';
import ActionRBG from './Component/Category/ActionRBG.jsx';
import OpenWorld from './Component/Category/OpenWorld.jsx';
import Action from './Component/Category/Action.jsx';
import Flight from './Component/Category/Flight.jsx';
import Fantasy from './Component/Category/Fantasy.jsx';
import BattleRoyal from './Component/Category/BattleRoyal.jsx';
import Zombie from './Component/Category/Zombie.jsx';
import Sports from './Component/Category/Sports.jsx';
import ReleaseDate from './Component/SortedBy/ReleaseDate.jsx';
import Popularity from './Component/SortedBy/Popularity.jsx';
import Alphabetical from './Component/SortedBy/Alphabetical.jsx';
import Relevance from './Component/SortedBy/Relevance.jsx';
import Pc from './Component/Platform/pc.jsx';
import Browser from './Component/Platform/Browser.jsx';
import All from './Component/AllGames/All.jsx';
import Search from './Component/Search/Search.jsx';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute.jsx';
function App() {
  const routers = createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
      {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:"/Game-Over",element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'/itemDetails/:id',element:<ProtectedRoute><ItemDetails/></ProtectedRoute>},
      {path:"/register",element:<Resgister/>},
      {path:'/login',element:<Login/>},
      {path:'/category/shooter',element:<ProtectedRoute><Shooter/></ProtectedRoute>},
      {path:'/category/actionrbg',element:<ProtectedRoute><ActionRBG/></ProtectedRoute>},
      {path:'/category/open-world',element:<ProtectedRoute><OpenWorld/></ProtectedRoute>},
      {path:'/category/action',element:<ProtectedRoute><Action/></ProtectedRoute>},
      {path:'/category/racing',element:<ProtectedRoute><Racing/></ProtectedRoute>},
      {path:'/category/flight',element:<ProtectedRoute><Flight/></ProtectedRoute>},
      {path:'/category/fantasy',element:<ProtectedRoute><Fantasy/></ProtectedRoute>},
      {path:'/category/battle-royal',element:<ProtectedRoute><BattleRoyal/></ProtectedRoute>},
      {path:'/category/zombie',element:<ProtectedRoute><Zombie/></ProtectedRoute>},
      {path:'/category/sports',element:<ProtectedRoute><Sports/></ProtectedRoute>},
      {path:'/sortedBy/release-data',element:<ProtectedRoute><ReleaseDate/></ProtectedRoute>},
      {path:'/sortedBy/popularity',element:<ProtectedRoute><Popularity/></ProtectedRoute>},
      {path:'/sortedBy/alphabetical',element:<ProtectedRoute><Alphabetical/></ProtectedRoute>},
      {path:'/sortedBy/relevance',element:<ProtectedRoute><Relevance/></ProtectedRoute>},
      {path:'/platform/pc',element:<ProtectedRoute><Pc/></ProtectedRoute>},
      {path:'/platform/browser',element:<ProtectedRoute><Browser/></ProtectedRoute>},
      {path:'/all',element:<ProtectedRoute><All/></ProtectedRoute>},
      {path:'/search',element:<ProtectedRoute><Search/></ProtectedRoute>},







      {index:true,element:<Login/>},
      {path:'*',element:<NotFound/>}
    ]}
  ])
  return <>
 
  <GameContextProvider>
  <RouterProvider router={routers}/>
  </GameContextProvider>


  
  </>
  
  
}

export default App;
