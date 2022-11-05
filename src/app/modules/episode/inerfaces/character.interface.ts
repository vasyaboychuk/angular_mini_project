export interface ICharacterInterface{
  id: number,
  name:string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode:string [],

}
//TODO WRITE THE SAME INTERFACE FOR NAME AND URL
