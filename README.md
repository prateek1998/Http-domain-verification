# Http-domain-verification

Steps to follow :
1. Add the file which you downloaded during the ssl verification process.
`for eg: 81B444A9DFCC1311794.txt`
2. update the server.js by replacing the file name.
3. Now run the dependency build cmd.
```bash 
npm install
```
4. Now start you server by cmd.
```bash 
npm start
```
Now when you search the url:
`http://localhost/.well-known/pki-validation/83B503C0C6BBA81B444A9DFCC1311794.txt`

you can easily find your file message.


