#!/bin/bash

# Flexpandas Website Deployment Script for AWS Lightsail

echo "🚀 Starting Flexpandas deployment..."

# Update package manager
sudo apt update

# Install Node.js 20 (if not already installed)
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js 20..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install PM2 for process management
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
fi

# Clone or update repository
if [ -d "flexpandas-site" ]; then
    echo "🔄 Updating existing repository..."
    cd flexpandas-site
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone https://github.com/YOUR_USERNAME/flexpandas-site.git
    cd flexpandas-site
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

# Initialize database
echo "🗄️ Initializing database..."
node -e "
const Database = require('better-sqlite3');
const db = new Database('production.db');

db.exec(\`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
\`);

db.exec(\`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    business_type TEXT,
    message TEXT NOT NULL,
    created_at INTEGER DEFAULT (strftime('%s', 'now'))
  )
\`);

console.log('Database tables created successfully!');
db.close();
"

# Set up environment
echo "⚙️ Setting up environment..."
cp .env.production .env

# Start application with PM2
echo "🚀 Starting application..."
pm2 delete flexpandas-site 2>/dev/null || true
pm2 start npm --name "flexpandas-site" -- start
pm2 save
pm2 startup

echo "✅ Deployment complete!"
echo "🌐 Your website should be available at: http://YOUR_LIGHTSAIL_IP"
echo "📊 Monitor with: pm2 status"
echo "📝 View logs with: pm2 logs flexpandas-site"
