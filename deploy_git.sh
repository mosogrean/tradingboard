cp .env.prd .env
yarn run deploy

git checkout gh-pages
git rebase main
git checkout main