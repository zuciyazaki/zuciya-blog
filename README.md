# 🦁 Zuciya Zaki Blog - Cybersecurity Journey

**Live Site:** [blog.zuciyazaki.com](https://blog.zuciyazaki.com)

Documenting the transformation from maritime boatswain to SOC Analyst Level 1. This blog showcases real-time progress, custom security tools, technical insights, and the honest truth about career transitions in cybersecurity.

---

## 📖 About This Blog

**Mission:** Document the entire journey from Day 1 to securing a SOC Analyst position, providing value to others learning cybersecurity while building a professional portfolio.

**Core Principles:**
- 🔨 **Build > Consume** - Creating tools and projects, not just consuming training
- 🔥 **Consistency > Perfection** - 50+ day unbroken learning streak maintained
- 🦁 **Lion-Hearted** - Courage to make the career transition despite challenges
- ✨ **Transparency** - Honest about AI assistance, struggles, and the learning process

---

## 🚀 Tech Stack

- **Frontend:** React 18 with React Router
- **Styling:** Tailwind CSS
- **Hosting:** DigitalOcean VPS (Ubuntu, Nginx)
- **SSL:** Let's Encrypt
- **DNS:** DigitalOcean / Cloudflare
- **Deployment:** Manual SCP upload (simple, fast)

---

## 🎨 Design System

**Brand Colors:**
- **Lion Gold:** `#D97706` - Primary brand color, warmth and determination
- **Trust Blue:** `#1E40AF` - Professional, cybersecurity theme
- **Fire Red:** `#DC2626` - Passion and energy
- **Dark Gray:** `#1F2937` - Text and contrast
- **Light Gray:** `#F9FAFB` - Clean backgrounds

**Typography:**
- Headers: Bold, high contrast
- Body: Readable (16-18px)
- Code: Monospace with syntax highlighting

**Visual Identity:**
- 🦁 Lion emoji for brand recognition
- Clean, modern card-based design
- Professional yet energetic tone
- Mobile-first responsive layout

---

## 📁 Project Structure

```
zuciya-blog/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   └── (integrated in App.jsx)
│   ├── posts/
│   │   ├── allPosts.js         # Post index (add new posts here)
│   │   └── (individual post files)
│   ├── App.jsx                 # Main app with routing
│   ├── index.js                # React entry point
│   └── index.css               # Tailwind + custom styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── DEPLOYMENT_GUIDE.md         # Complete deployment instructions
└── README.md                   # This file
```

---

## 🛠️ Local Development

### **Prerequisites**
- Node.js 16+ and npm
- Git (for version control)

### **Setup**

```bash
# Clone repository
git clone https://github.com/zuciyazaki/zuciya-blog.git
cd zuciya-blog

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### **Build for Production**

```bash
# Create optimized production build
npm run build

# Output will be in /build directory
```

---

## ✍️ Adding New Blog Posts

### **Step 1: Create Post File**

Create a new file in `src/posts/`:

```javascript
// src/posts/my-new-post.js
import React from 'react';

export const myNewPost = {
  slug: 'my-new-post',
  title: 'My Awesome Blog Post',
  date: 'December 27, 2024',
  readTime: '5 min read',
  category: 'Technical', // Journey, Technical, Tutorial, Mindset
  streak: 51, // Optional: day of streak
  excerpt: 'A short preview of what the post is about...',
  tags: ['security', 'tools', 'tryhackme'],
  content: (
    <div className="prose-content">
      <h2>Your First Section</h2>
      <p>Your content here...</p>
      
      {/* Use custom styling components */}
      <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
        <p>Highlighted callout box!</p>
      </div>
    </div>
  )
};
```

### **Step 2: Add to Index**

```javascript
// src/posts/allPosts.js
import { maritimeToCyberPost } from './maritime-to-cyber';
import { myNewPost } from './my-new-post';

export const posts = [
  maritimeToCyberPost,
  myNewPost, // NEW POST
];
```

### **Step 3: Build & Deploy**

```bash
npm run build
scp -r build/* root@YOUR_VPS_IP:/var/www/blog/
```

Done! New post is live at `https://blog.zuciyazaki.com/post/my-new-post`

---

## 🚀 Deployment

**See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for complete instructions.**

**Quick summary:**
1. Build locally: `npm run build`
2. Upload to VPS: `scp -r build/* root@YOUR_IP:/var/www/blog/`
3. Blog is live!

**No separate VPS needed** - deploys to same server as tools.zuciyazaki.com

---

## 📊 Blog Statistics

- **Launch Date:** December 26, 2024
- **Total Posts:** 1 (and growing!)
- **Learning Streak:** 50+ days unbroken
- **Tools Built:** 5 Python CLI tools + web toolkit
- **TryHackMe Rank:** Top 8% globally

---

## 🎯 Blog Categories

- **Journey** - Personal stories, milestones, career transition updates
- **Technical** - Tool showcases, security concepts, hands-on labs
- **Tutorial** - Step-by-step guides, how-tos, technical deep-dives
- **Mindset** - Learning strategies, streak maintenance, mental frameworks

---

## 🔗 Connect

- **Portfolio:** [zuciyazaki.com](https://zuciyazaki.com)
- **Security Tools:** [tools.zuciyazaki.com](https://tools.zuciyazaki.com)
- **GitHub:** [@zuciyazaki](https://github.com/zuciyazaki)
- **TryHackMe:** [zuciyazaki](https://tryhackme.com/p/zuciyazaki)
- **LinkedIn:** [dominicmetz](https://linkedin.com/in/dominicmetz)

---

## 💭 About Zuciya Zaki

**Zuciya Zaki** means "Lion-Hearted, Pure" in Hausa.

This blog represents an identity-level commitment to cybersecurity. Not someone trying to become a SOC analyst - someone who IS becoming one, documenting every step transparently.

**The Ninja Way:** "I never go back on my word."

---

## 📝 Content Philosophy

**Transparency Over Perfection**
- Openly acknowledge using Claude AI for development
- Show the real challenges, not just the wins
- Document failures and how I overcame them

**Provide Real Value**
- Every post teaches something or inspires action
- Specific, actionable content (not vague advice)
- Share actual code, commands, and tools

**Build > Consume**
- Focus on creating projects, not just completing courses
- Tools that solve real problems I encountered
- Portfolio-grade work, not just tutorials

---

## 🦁 The Journey Continues

This blog is updated regularly as the journey progresses. Follow along to see:

- Security+ certification preparation and exam
- Custom security tool development
- TryHackMe room writeups
- Job application process and interview prep
- The day I land my first SOC Analyst role

**Current Goal:** SOC Analyst Level 1 position within 12-18 months

**BELIEVE IT! 🔥**

---

## 📄 License

**Content:** All blog posts, writing, and personal stories © 2024-2025 Dominic Metz (Zuciya Zaki)

**Code:** MIT License - Feel free to use the blog structure for your own site!

---

**Built with determination, consistency, and lion-hearted courage. 🦁**

*"I never go back on my word. That's my ninja way."*
