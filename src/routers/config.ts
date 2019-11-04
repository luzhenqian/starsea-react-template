interface IMeta {
  title: string;
}

export interface IRoute {
  path: string;
  component: string;
  exact?: boolean;
  meta: IMeta;
  requireAuth?: boolean;
  key?: any;
}

const routes: IRoute[] = [
  {
    path: "/",
    component: "HelloWorld",
    exact: true,
    requireAuth: false,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/login",
    component: "Login",
    exact: true,
    requireAuth: false,
    meta: {
      title: "登陆页",
    },
  },
  {
    path: "*",
    component: "NoMatch",
    meta: {
      title: "页面未找到",
    },
  },
];

export default routes;
