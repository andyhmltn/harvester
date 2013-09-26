harvester
=========

A very simple Node.JS script to concatinate CSS files by calling a URL.

Getting started
---------

1. Install the dependencies using `npm install`

2. Edit `config.json` to meet your requirements. `base_url` is the URL to load the files in from. If you are storing harvester in a subfolder of your main application, you would set it to `../`.

3. Run harvester `node server.js`

4. Make a request. If you wanted to concatinate `file1.css` and `file2.css` you would simply reference them as `http://your-harvester-server.tld/file1.css+file2.css` in your code.
