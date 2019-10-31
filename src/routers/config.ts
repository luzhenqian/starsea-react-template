interface Meta {
  title: string
}

export interface Route {
  path: string,
  component: string,
  exact?: boolean,
  meta: Meta,
  requireAuth?: boolean,
  key?: any
}

const routes: Route[] = [
  {
    path: "/",
    component: "HelloWorld",
    exact: true,
    requireAuth: false,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/login",
    component: "Login",
    exact: true,
    requireAuth: false,
    meta: {
      title: "登陆页"
    }
  },
  {
    path: "*",
    component: "NoMatch",
    meta: {
      title: "页面未找到"
    }
  }
]

export default routes;