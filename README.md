# boilerplage
vite + react + typescript 환경

## How to start
```shell
# git clone {저장소 URL} [폴더명]
git clone https://github.com/creative-coders-club/boilerplate.git ccc-boilerplate 
```

```shell
npm ci

npm run dev
```

## msw boilerplate 버전 clone 
```shell
# git clone {저장소 URL} -b {branch_name} --single-branch [폴더명]
git clone https://github.com/creative-coders-club/boilerplate.git -b env/with-msw --single-branch
```

```shell
git clone https://github.com/creative-coders-club/boilerplate.git -b env/with-msw --single-branch ccc-study
```

## 새로운 git 등록을 위한 추가 작업 (OPTIONAL)
> rm -rf .git 으로 기존 git 을 제거하고 새로운 git 설정 후 새로운 github remote 등록

```shell
rm -rf .git

git init 

git remote add origin [new github url]
git branch -M main
git push -u origin main
```


