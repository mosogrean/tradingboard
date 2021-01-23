import GuestRouter from './GuestRouter';

const routerCompile = [
  GuestRouter,
];

const Router = (): any => routerCompile.map((router: any) => router);

export default Router();
