rm -rf dist &&
yarn build:website &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:liuliyang666/circle-ui-website.git &&
git push -f -u origin master &&
cd ..
echo https://liuliyang666.github.io/circle-ui-website/index.html
