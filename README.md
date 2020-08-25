# Alive

Alive is small timestamp hashing project

## Installation

Download node.js from https://nodejs.org/en/download/ and follow instructions to setup environment.

Clone this project from github.com

## To build and create dist
Install the dependencies in the local node_modules folder
```node
npm install
```
To create distributables for mac, linus and windows
```node
npm run dist
```

## Usage
To start server on mac or linux
```node
./dist/alive-<os_platform>
```
To start server on windows
```node
<Drive>:\alive--win.exe

```
To start the simple client, you give the ip address and port you want to connect to
```node
node /src/client.js <host> <port>
```

If the server exist and we recognize the hashed response we display the timestamp:
```console
Sat Aug 22 2020 22:00:25 GMT+0200 (Central European Summer Time)
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
