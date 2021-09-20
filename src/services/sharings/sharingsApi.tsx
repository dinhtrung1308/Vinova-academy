import { VinovaAPIInstance } from '../configApi';

/*export const loadSharings = async (data) => {
  const res = await VinovaAPIInstance.get(`${process.env.REACT_APP_USER_PATH}/sharings`, data);
  return res.data
};*/
const initSharingsTest =[
  {
    title: 'This is Page 1',
    author:'Alex',
    description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
    files:[],
    logo:'https://topdev.vn/blog/wp-content/uploads/2019/09/reactjs-nhung-dieu-ban-can-phai-biet-3.png',
    user_rated:[],
    rating: 7,
    technical:'ReactJS',
  },
  {
    title: 'This is Page 2',
    author:'Mon',
    description: ` JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.
        Because JavaScript is a great language for coding beginners, we have gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.`,
    files:[],
    logo:'https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png',
    user_rated:[],
    rating: 8,
    technical:'JavaScript',
  },
  {
    title: 'This is Page 3',
    author:'Ro',
    description: ` JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.
        Because JavaScript is a great language for coding beginners, we have gathered some of the best learning resources around and built a JavaScript course to help new developers get up and running.`,
    files:[],
    logo:'https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/01/30163613/Tu-hoc-javascript-trong-10-tieng-1-1024x682.jpeg',
    user_rated:[],
    rating: 10,
    technical:'JavaScript',
  },
  {
    title: 'This is Page 4',
    author:'Mon',
    description: `An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
    An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
    An incrementally adoptable ecosystem that scales between a library and a full-featured framework. `,
    files:[],
    logo:'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
    user_rated:[],
    rating: 7,
    technical:'VueJS',
  },

];
export const addSharings = (data) => {
  const isDupTitle = initSharingsTest.filter((e)=>
    e.title === data.title
  )
  return (isDupTitle.length === 0) ;
}
export const loadSharings = (data:string) => {
  //const res = await VinovaAPIInstance.get(`${process.env.REACT_APP_USER_PATH}/sharings`, data);
  return initSharingsTest;
};
export const updateRating = (data:number) => {
  return true;
};