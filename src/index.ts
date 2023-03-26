import axios from 'axios';

const getData = async () => {
  try {
    const listPost = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    console.log(listPost.data);
    const dataDetail = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    console.log(dataDetail.data.results);
  } catch (err) {
    console.log(err);
  }
}

getData();