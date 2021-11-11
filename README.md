# Tech Radar

https://ericyarbrough.github.io/tech-radar/

![Tech radar logo](src/logo.jpg)

Please feel free to fork this repository

## Local Development

1. Install the npm modules:

```sh
yarn install
```

2. Start local dev server:

```sh
yarn start
```

3. Go to the local development URL
 
```
http://localhost:3000/
```

## Update with new data

1. The data is for the technologies by updating

```
src/data.js
```

New Entries should be in the format of 

``` json
      {
        "quadrant": 1,
        "ring": 0,
        "label": "xxxxxx",
        "active": true,
        "moved": 1
      },
```

## Publishing to GH Pages

1. Build the new docs/ folder 

```sh
yarn build
```

2. Push to Github and enable GH Pages under Settings > Pages. Set the public folder to be served from the /docs folder. Your tech radar will then be available at 

```
${yourusername}.github.io/tech-radar/
```

Please check out original [Fork](https://github.com/zalando/tech-radar) for credit or any additional implementation details 

## License

```
The MIT License (MIT)

Copyright (c) 2021 Eric Yarbrough

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
