interface Iroutes {
  authentication: string,
  itest: string;
  menu: {
    default: string,
    dashboard: string,
    sharings: string,
    createcourse: string,
    courses: {
      default: string,
      catalog: string,
      myCourse: string,
      detail: string
    },
    account: string,
    questionBank: string,
    result: string;
    guide: string;
    profile: string;
    report: string;
  }
}

export const routes: Iroutes = {
  authentication: '/auth',
  itest: '/itest',
  menu: {
    default: '',
    dashboard: '/dashboard',
    sharings: '/sharings',
    account: '/account',
    questionBank: '/questionbank',
    createcourse: '/createcourse',
    courses: {
      default: '/courses',
      catalog: '/courses/catalog',
      myCourse: '/courses/mycourse',
      detail: '/courses/:id'
    },
    result: '/result',
    guide: '/guide',
    profile: '/profile',
    report:'/report',
  }
}
