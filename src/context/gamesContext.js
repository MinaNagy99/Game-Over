import axios from "axios";
import { createContext, useEffect, useState } from "react";


   export let GameContext = createContext('')
function GameContextProvider(props) {
    const [allGames,setAllGames]=useState([])
    const [ZombieGames,setZombieGames] =useState([])
    const [RacingGames,setRacingGames] =useState([])
    const [FantasyGames,setFantasyGames] =useState([])
    const [SportsGames,setSportsGames] =useState([])
    const [ActionGames,setActionGames] =useState([])
    const [ActionRBGGames,setActionRBGGames] =useState([])
    const [BattelRoyalGames,setBattelRoyalGames] =useState([])
    const [ShooterGames,setShooterGames] =useState([])
    const [FlightGames,setFlightGames] =useState([])
    const [OpenWorldGames,setOpenWorldGames] =useState([])
    const [AlphabeticalGames,setAlphabeticalGames] =useState([])
    const [PopularityGames,setPopularityGames] =useState([])
    const [ReleaseDateGames,setReleaseDateGames] =useState([])
    const [RelevanceGames,setRelevanceGames] =useState([])
    const [PcPlatformGames,setPcPlatformGames] =useState([])
    const [BrowserPlatformGames,setBrowserPlatformGames] =useState([])





    async function getAllGames() {
  
  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': 'fb44ef1ac6msh5962567eaff3a06p14b05cjsn2bdc82c54652',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
    setAllGames(response.data)
  } catch (error) {
      console.error(error);
  }
    }

    async function getAllGameByCategory(categ) {

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {
    category: categ
  },
  headers: {
    'X-RapidAPI-Key': 'fb44ef1ac6msh5962567eaff3a06p14b05cjsn2bdc82c54652',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  if (categ=='racing') {
    setRacingGames(response.data)
  }
  if (categ=='shooter') {
  setShooterGames(response.data)
    
  }
  if (categ=='fantasy') {
    setFantasyGames(response.data)
  }
  if (categ=='sports') {
    setSportsGames(response.data)
  }
if (categ=='zombie') {
  setZombieGames(response.data)
}
  if (categ=='action-rpg') {
    setActionRBGGames(response.data)
  }
  if (categ=='battle-royale') {
    setBattelRoyalGames(response.data)
  }
  if (categ=='flight') {
    setFlightGames(response.data)
  }
  if (categ='open-world') {
    setOpenWorldGames(response.data)
  }
  if (categ='action') {
   setActionGames(response.data) 
  }

} catch (error) {
	console.error(error);
}
    }

    async function getGamesSortedBy(sort) {
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {
    'sort-by': sort
  },
  headers: {
    'X-RapidAPI-Key': 'fb44ef1ac6msh5962567eaff3a06p14b05cjsn2bdc82c54652',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  if (sort=='alphabetical') {
    setAlphabeticalGames(response.data)
  }
  if (sort='popularity') {
    setPopularityGames(response.data)
  }
  if (sort='release-date') {
    setReleaseDateGames(response.data)
  }
  if (sort='relevance') {
    setRelevanceGames(response.data)
  }
} catch (error) {
	console.error(error);
}
    }

    async function getGamesPlatform(plat) {

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  params: {platform: plat},
  headers: {
    'X-RapidAPI-Key': 'fb44ef1ac6msh5962567eaff3a06p14b05cjsn2bdc82c54652',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
  if (plat=='pc') {
    setPcPlatformGames(response.data)
  }
  if (plat=='browser') {
    setBrowserPlatformGames(response.data)
    
  }
} catch (error) {
	console.error(error);
}
    }
  
    useEffect(() => {
      getAllGames()
      getAllGameByCategory('shooter')
      getAllGameByCategory('racing')
      getAllGameByCategory('sports')
      getAllGameByCategory('zombie')
      getAllGameByCategory('action')
      getAllGameByCategory('action-rpg')
      getAllGameByCategory('battle-royale')
      getAllGameByCategory('fantasy')
      getAllGameByCategory('flight')
      getAllGameByCategory('open-world')
      getGamesSortedBy('alphabetical')
      getGamesSortedBy('popularity')
      getGamesSortedBy('release-date')
      getGamesSortedBy('relevance')
      getGamesPlatform('pc')
      getGamesPlatform('browser')
      


   


      
    },[])
    return <GameContext.Provider value={{allGames,ShooterGames,RacingGames,FantasyGames,ZombieGames,ActionGames,FlightGames,BattelRoyalGames,OpenWorldGames,SportsGames,ActionRBGGames,RelevanceGames,PopularityGames,ReleaseDateGames,AlphabeticalGames,PcPlatformGames,BrowserPlatformGames}}>

    {props.children}
    </GameContext.Provider>
    
}

export default GameContextProvider