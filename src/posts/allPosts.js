import React from 'react';

// Blog Post: My First 50 Days in Cybersecurity
const maritimeToCyberPost = {
  slug: 'my-first-50-days-in-cybersecurity',
  title: 'My First 50 Days in Cybersecurity: Tools, Skills, and Real Progress',
  date: 'December 26, 2025',
  readTime: '10 min read',
  category: 'Journey',
  streak: 59,
  excerpt: 'What does 50 days of focused cybersecurity training actually produce? From zero background to top 6% on TryHackMe, 5 custom security tools built, and Security+ preparation - here\'s the transparent reality of building SOC Analyst skills.',
  tags: ['cybersecurity', 'tryhackme', 'soc-analyst', 'security-tools', 'security+'],
  content: (
    <div className="prose-content">
      {/* Opening Hook */}
      <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 mb-8 rounded-r-lg">
        <p className="text-xl font-semibold text-white mb-2">
          "I never go back on my word. That's my ninja way." 🦁
        </p>
        <p className="text-gray-700 italic">
          50 days ago, I made a decision. Not "someday I'll learn cybersecurity." Not "when I have more time." 
          I decided to START. RIGHT NOW. While working 7 days a week on a boat.
        </p>
      </div>

      {/* Introduction */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Decision Point</h2>
      
      <p className="text-gray-300 leading-relaxed mb-4">
        Octoberber 27th, 2025. I was exhausted after another 7-day maritime work week. My body ached. 
        I had every excuse to wait. "I'll start when work slows down." "I'll start when I have more energy." 
        "I'll start when I'm not so tired."
      </p>

      <p className="text-gray-300 leading-relaxed mb-4">
        But something clicked that day. I realized those excuses would ALWAYS be there. There would NEVER 
        be a "perfect time." The boat schedule wasn't changing. The fatigue wasn't going away. If I waited 
        for ideal conditions, I'd be waiting forever.
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        So I made a choice that changed everything: <strong className="text-cyan-600">NOT SOMEDAY. NOW.</strong>
      </p>

      {/* The Challenge */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Challenge: Learning While Living</h2>

      <div className="bg-gray-700 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-white mb-3">My Reality:</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <span>Working 7 days per week (NO days off)</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <span>Physical maritime labor (not desk work)</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <span>Zero cybersecurity background</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <span>Irregular schedule, unpredictable energy levels</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2">❌</span>
            <span>Limited time each day</span>
          </li>
        </ul>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        Most people would look at this and say "wait until your schedule improves." But I knew something 
        critical: <strong>Constraint breeds creativity.</strong> Limited time forces you to be strategic. 
        Exhaustion forces you to be efficient. The challenge wasn't an obstacle – it was the TRAINING GROUND.
      </p>

      {/* The System */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The System: How I Maintained 50+ Days</h2>

      <p className="text-gray-300 leading-relaxed mb-4">
        People ask me: "How do you maintain a streak while working 7 days a week?" The answer isn't 
        superhuman willpower. It's <strong className="text-cyan-600">SYSTEMS over motivation.</strong>
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-3">Rule #1: Identity Over Tasks</h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        I didn't "try to learn cybersecurity." I BECAME a SOC analyst in training. This wasn't a hobby. 
        This wasn't a side project. This was WHO I AM NOW. When you shift identity, the behaviors follow naturally.
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-3">Rule #2: Build > Consume</h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        I didn't just watch training videos and complete challenges. I BUILT TOOLS. Every concept I learned, 
        I asked: "Can I build something that reinforces this?" The result? 5 Python CLI security tools totaling 
        ~300,000 lines of code:
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6">
        <ul className="space-y-3 font-mono text-sm">
          <li>🔐 <strong className="text-cyan-500">zaki-john.py</strong> - Hash cracking automation</li>
          <li>💥 <strong className="text-cyan-500">zaki-msf.py</strong> - Metasploit reference</li>
          <li>🐧 <strong className="text-cyan-500">zaki-linux.py</strong> - 170+ Linux commands</li>
          <li>📚 <strong className="text-cyan-500">zaki-cert-mastery.py</strong> - Adaptive Security+ learning</li>
          <li>🎯 <strong className="text-cyan-500">zaki-quiz.py</strong> - Quick knowledge testing</li>
        </ul>
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        Plus a live web toolkit at <a href="https://tools.zuciyazaki.com" className="text-cyan-600 hover:text-cyan-700 font-semibold" target="_blank" rel="noopener noreferrer">tools.zuciyazaki.com</a> with 
        hash identifiers, password analyzers, port references, and more.
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-3">Rule #3: Flexibility Within Structure</h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        Some days I have 3 hours. Some days I have 30 minutes. The streak doesn't demand perfection – 
        it demands SHOWING UP. Bad days? I do ONE TryHackMe room. Great days? I build new features for my tools. 
        The non-negotiable? <strong className="text-cyan-600">ZERO days missed.</strong>
      </p>

      <h3 className="text-2xl font-bold text-white mt-8 mb-3">Rule #4: Transparency Over Perfection</h3>
      <p className="text-gray-300 leading-relaxed mb-6">
        I use Claude AI for development assistance, and I'm completely transparent about it. My GitHub READMEs 
        explain exactly how I use AI. Why? Because modern SOC analysts WILL use AI tools. The skill isn't 
        doing everything manually – it's understanding, validating, and applying solutions effectively.
      </p>

      {/* The Results */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Results: 50 Days of Compound Growth</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-600 rounded-lg p-6">
          <h3 className="text-xl font-bold text-cyan-900 mb-3">🎯 TryHackMe Stats</h3>
          <ul className="space-y-2 text-gray-200">
            <li><strong>Rank:</strong> Top 6% globally (112K out of 3M users)</li>
            <li><strong>Rooms Completed:</strong> 65+</li>
            <li><strong>Learning Events:</strong> 2,000+</li>
            <li><strong>Paths Done:</strong> Pre-Security, Cyber Security 101</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-600 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-3">📚 Security+ Progress</h3>
          <ul className="space-y-2 text-gray-200">
            <li><strong>Starting Score:</strong> 66%</li>
            <li><strong>Current Score:</strong> 78%</li>
            <li><strong>Improvement:</strong> +12% in 50 days</li>
            <li><strong>Target:</strong> Pass within next 30 days</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-600 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-green-900 mb-3">🛠️ Projects Built</h3>
        <ul className="space-y-2 text-gray-200">
          <li><strong>5 Python CLI Tools</strong> - Many lines of code</li>
          <li><strong>Live Web Toolkit</strong> - React app deployed to production VPS</li>
          <li><strong>GitHub Portfolio</strong> - Professional documentation with transparency</li>
          <li><strong>VM Lab Environment</strong> - Kali, Ubuntu, Windows 10, Metasploitable</li>
          <li><strong>This Blog</strong> - You're reading it!</li>
        </ul>
      </div>

      {/* Key Breakthroughs */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Breakthrough Moment</h2>

      <p className="text-gray-300 leading-relaxed mb-4">
        Around day 35, something incredible happened. I was watching a TryHackMe walkthrough video, and I realized 
        something shocking: <strong className="text-cyan-600">I understood everything they were saying.</strong>
      </p>

      <p className="text-gray-300 leading-relaxed mb-4">
        Terms like "lateral movement," "privilege escalation," "reverse shell," "hash cracking" – they weren't 
        just words anymore. They were CONCEPTS I UNDERSTOOD. When the instructor said "let's check if SSH is running," 
        my brain automatically knew: "Port 22, use nmap -p22, then try default credentials or bruteforce."
      </p>

      <p className="text-gray-300 leading-relaxed mb-6">
        That's when I knew: I wasn't just memorizing. I was LEARNING. The neural pathways were forming. 
        The compound effect was REAL.
      </p>

      {/* Challenges Overcome */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">Challenges I Overcame</h2>

      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-red-600 pl-4">
          <h3 className="text-lg font-bold text-white mb-2">🔥 Burnout Moments</h3>
          <p className="text-gray-700">
            Day 23 was brutal. Worked 12 hours on the boat, could barely keep my eyes open. Did ONE room. 
            Fifteen minutes. Streak maintained. That's the ninja way.
          </p>
        </div>

        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="text-lg font-bold text-white mb-2">💻 Technical Roadblocks</h3>
          <p className="text-gray-700">
            VirtualBox networking broke. Spent 6 hours debugging. Learned Host-Only, NAT, Bridged, and VPN 
            configurations. Now I understand networking 10x better. Obstacles = Opportunities.
          </p>
        </div>

        <div className="border-l-4 border-cyan-600 pl-4">
          <h3 className="text-lg font-bold text-white mb-2">🧠 Imposter Syndrome</h3>
          <p className="text-gray-700">
            "Am I even good enough?" "Should I be using AI?" "Will employers care about my background?" 
            Answer: BUILD ANYWAY. Results speak louder than doubts.
          </p>
        </div>
      </div>

      {/* The Future */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Next 50 Days (And Beyond)</h2>

      <p className="text-gray-300 leading-relaxed mb-4">
        This is just the beginning. My 12-18 month roadmap to SOC Analyst Level 1:
      </p>

      <div className="bg-gray-900 text-gray-100 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-cyan-500 mb-4">🎯 The Roadmap</h3>
        <div className="space-y-3 font-mono text-sm">
          <div>
            <strong className="text-green-400">✅ Days 1-50:</strong> Foundation built, tools created, streak established
          </div>
          <div>
            <strong className="text-cyan-400">🔄 Days 51-100:</strong> Security+ certification, SOC training path
          </div>
          <div>
            <strong className="text-blue-400">📅 Days 101-180:</strong> Blue Team Level 1, advanced labs, portfolio polishing
          </div>
          <div>
            <strong className="text-purple-400">📅 Days 181-365:</strong> Job applications, networking, interviews, HIRED
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-4">For Anyone Reading This</h2>

      <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-lg p-8 mb-6">
        <p className="text-lg leading-relaxed mb-4">
          If you're thinking about starting your own journey – whether it's cybersecurity, coding, or anything else – 
          here's what I want you to know:
        </p>
        
        <ul className="space-y-3 text-lg">
          <li className="flex items-start">
            <span className="mr-3">🧠</span>
            <span>You DON'T need perfect conditions. Start with what you have.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">🔥</span>
            <span>You DON'T need massive time blocks. 30 minutes daily beats 5 hours once.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">💪</span>
            <span>You DON'T need to do it alone. Use AI, use communities, use resources.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3">⚡</span>
            <span>You DON'T need to be perfect. You need to be CONSISTENT.</span>
          </li>
        </ul>

        <p className="text-2xl font-bold mt-6 text-center">
          NOT SOMEDAY. NOW. BELIEVE IT! 💯🔥
        </p>
      </div>

      {/* Closing */}
      <p className="text-gray-300 leading-relaxed mb-4">
        This blog will document the entire journey. The wins, the struggles, the tools I build, the lessons I learn. 
        I'm not waiting until I "make it" to share the story. I'm sharing it AS IT HAPPENS.
      </p>

      <p className="text-gray-300 leading-relaxed mb-4">
        Day 50 is in the books. Day 51 starts tomorrow. The streak continues. The ninja way prevails.
      </p>

      <p className="text-xl font-bold text-cyan-600 mb-2">
        That's my word.
      </p>

      <p className="text-gray-600 italic">
        — Zuciya Zaki (Dominic Metz)
      </p>
    </div>
  )
};

// Export all posts as an array
export const posts = [
  maritimeToCyberPost,
  // Add more posts here as you create them
];

export default posts;