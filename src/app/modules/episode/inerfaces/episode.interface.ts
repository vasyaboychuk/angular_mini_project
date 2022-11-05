export interface IAllData {
  // id: number,
  // name: string,
  // air_date: string,
  // episode: string,
  // characters:string[]
  info: {
    count: number,
    pages: number,
    next: string|null,
    prev: string|null
  },
  results:IResults[]

}
export interface IResults{
  id: 1,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],

}

