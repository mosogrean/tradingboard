import InvestorRouter from './InvestorRouter';

const routerCompile = [
  InvestorRouter,
];

const Router = (): any => routerCompile.map((router: any) => router);

export default Router();
