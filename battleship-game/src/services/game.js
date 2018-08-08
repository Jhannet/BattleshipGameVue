import axios from 'axios';
const localStorage = window.localStorage;

const URL = 'http://localhost:3000/game';

export default {
  createGame({ rows, columns } = {}) {
    return axios.post(URL, { rows, columns })
      .then((response) => {
        localStorage.setItem('playerId_1', JSON.stringify(response.data.playerId));
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  gameJoin(url) {
    return axios.get(url)
      .then((response) => {
        const gameId = response.data.id;
        const playerId = response.data.playerId;
        localStorage.setItem('gameId', JSON.stringify(gameId));
        localStorage.setItem('playerId_2', JSON.stringify(playerId));
        console.log(localStorage.getItem('playerId_2'))
        
        return axios.get(`${URL}/${gameId}/${playerId}`);
      })
      .then(game => game.data)
      .catch((error) => {
        console.log(error);
      });
  },
};
