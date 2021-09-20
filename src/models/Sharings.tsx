export interface RatedUser{
  id: string,
  rating: number,
}
export interface ISharing {
  
  title: string,
  author: string,
  description: string,
  files: File[],
  logo:string,
  user_rated:RatedUser[],
  rating: number,
  technical: string
}


export const initialSharing: ISharing = {
  
  title: '',
  author:'',
  description: '',
  files:[],
  logo:'',
  user_rated:[],
  rating: 0,
  technical:'',
}

