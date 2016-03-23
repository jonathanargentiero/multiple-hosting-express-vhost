# Multiple sites on express+vhost boilerplate

An express+vhost boilerplate to host multiple static applications

* * *

## Installation

1. Clone the git repo
2. Run `npm install`

A Node.js server will be automatically launched on port 8080.

## Configuration

To add a virtual host simply insert a JSON object in the `vhost.json` file with the following attributes:

```
{
  "domain": "your-domain.com",
  "path": "relative/path/to/website"
}
```

It's also possible to define global routes in the `server.js` file.

NOTE: For local development `localhost` parameter works.