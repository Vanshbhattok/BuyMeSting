# ⚡ Buy Me Sting - Creator Support Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</div>

<br>

**Buy Me Sting** is a modern, full-stack creator support platform inspired by "Buy Me a Coffee." It provides creators with an elegant and simple way to receive support from their audience while showcasing the power of serverless architecture and modern web technologies.

## 🌟 Live Demo

**[🚀 Visit Buy Me Sting](https://buy-me-sting.vercel.app/)**

---

## ✨ Key Features

### 🔐 **Secure Authentication**
- GitHub OAuth integration via NextAuth.js
- Secure session management
- Seamless sign-in/sign-up experience

### 👤 **Creator Profiles**
- Personalized, shareable profile pages
- Customizable creator information
- Easy-to-share support links

### 🗄️ **Real-time Database**
- MongoDB Atlas integration
- Secure data storage and retrieval
- Real-time updates and synchronization

### ⚡ **Serverless Architecture**
- Built on Next.js for optimal performance
- Vercel deployment for global CDN
- Infinite scalability and zero-downtime

### 📱 **Responsive Design**
- Mobile-first approach
- Clean and modern UI/UX
- Consistent experience across all devices

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center"><strong>Frontend</strong></td>
<td align="center"><strong>Backend</strong></td>
<td align="center"><strong>Database</strong></td>
<td align="center"><strong>Deployment</strong></td>
</tr>
<tr>
<td>

- **Next.js 14** - React Framework
- **React 18** - UI Library  
- **Tailwind CSS** - Styling
- **NextAuth.js** - Authentication

</td>
<td>

- **Next.js API Routes** - Serverless Functions
- **NextAuth.js** - Auth Middleware
- **Mongoose** - ODM for MongoDB

</td>
<td>

- **MongoDB Atlas** - Cloud Database
- **Mongoose** - Schema Modeling

</td>
<td>

- **Vercel** - Hosting & CI/CD
- **GitHub** - Version Control

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### 1. 📥 Clone & Setup

```bash
# Clone the repository
git clone https://github.com/Vanshbhattok/BuyMeSting.git

# Navigate to project directory
cd BuyMeSting

# Install dependencies
npm install
```

### 2. 🔧 Environment Configuration

Create a `.env.local` file in the root directory:

```env
# MongoDB Atlas Connection
MONGODB_URI="your_uri_here"

# GitHub OAuth App Credentials
GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"

# NextAuth.js Configuration
NEXTAUTH_SECRET="your_super_secret_key_here"
NEXTAUTH_URL="http://localhost:3000"
```

#### 📝 Getting Environment Variables:

**MongoDB Atlas:**
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create new cluster and database
3. Get connection string from "Connect" → "Connect your application"

**GitHub OAuth:**
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Create new OAuth App with:
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
3. Copy Client ID and Client Secret

**NextAuth Secret:**
```bash
# Generate a secure secret
openssl rand -base64 32
```

### 3. 🏃‍♂️ Run Development Server

```bash
# Start the development server
npm run dev

# Or with yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
BuyMeSting/
├── 📄 README.md
├── 📄 package.json
├── 📄 next.config.js
├── 📄 tailwind.config.js
├── 📁 app/
│   ├── 📁 api/
│   │   └── 📁 auth/
│   ├── 📁 components/
│   ├── 📁 lib/
│   └── 📄 layout.js
├── 📁 models/
│   └── 📄 User.js
├── 📁 public/
└── 📁 styles/
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Connect GitHub Repository:**
   - Import your GitHub repository to Vercel
   - Vercel will automatically detect Next.js

2. **Configure Environment Variables:**
   - Add all environment variables from `.env.local`
   - Update `NEXTAUTH_URL` to your deployed domain

3. **Deploy:**
   - Vercel automatically deploys on every push to main branch

### Alternative Deployment Options

<details>
<summary>Deploy to Netlify</summary>

```bash
# Build the project
npm run build

# Deploy to Netlify (install netlify-cli first)
npm install -g netlify-cli
netlify deploy --prod --dir=out
```
</details>

<details>
<summary>Deploy with Docker</summary>

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```
</details>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Found a Bug?
- Check if it's already reported in [Issues](https://github.com/Vanshbhattok/BuyMeSting/issues)
- Create a new issue with detailed description and steps to reproduce

### 💡 Have an Idea?
- Open a feature request issue
- Discuss your ideas before implementing

### 🔧 Want to Contribute Code?

1. **Fork the repository**
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Make changes and commit:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

#### Development Guidelines:
- Follow existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📈 Roadmap

- [x] **Payment Integration** (RazorPay)
- [x] **Multiple Payment Options** (UPI, Net Banking, Card options)
- [x] **Creator Dashboard** (Analytics, Revenue tracking)
- [x] **Message System** (Supporters can leave messages)
- [ ] **Social Media Integration** (Twitter, Instagram links)
- [ ] **Email Notifications** (Support notifications)
- [ ] **Dark Mode** (Theme switching)
- [x] **Responsive App** (Resposive for mobile users)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ using [Next.js](https://nextjs.org/)
- Hosted on [Vercel](https://vercel.com/)

---

## 📞 Support

If you like this project, please ⭐ star it on GitHub!

**Need help?**
- 📧 Email: [vanshbhattok@gmail.com](vanshbhattok@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/Vanshbhattok/BuyMeSting/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/Vanshbhattok/BuyMeSting/discussions)

---

<div align="center">
  <strong>Made with ❤️ by <a href="https://github.com/Vanshbhattok">Vanshbhattok</a></strong>
</div>
