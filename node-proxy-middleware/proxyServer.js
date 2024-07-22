const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Allow this origin
  credentials: true, // Allow cookies to be sent
}));

// Proxy configuration
app.use('/api', createProxyMiddleware({
  target: 'https://deficoin.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix when forwarding to the target
  },
  onProxyReq: (proxyReq, req, res) => {
    // Add custom header to avoid CORS issues
    proxyReq.setHeader('Origin', 'https://deficoin.io');
    console.log(`Proxying request to: ${proxyReq.path}`);
  },
  onError: (err, req, res) => {
    res.writeHead(500, {
      'Content-Type': 'text/plain',
    });
    res.end('Something went wrong with the proxy server.');
  }
}));

// Start the proxy server
const port = 3001;
app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});
