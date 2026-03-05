import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { Card } from './Layout';
import { Github, GitCommit, Book, Code } from 'lucide-react';

const languageData = [
  { name: 'TypeScript', value: 45, color: '#3178c6' },
  { name: 'JavaScript', value: 25, color: '#f7df1e' },
  { name: 'Python', value: 15, color: '#3776ab' },
  { name: 'C++', value: 10, color: '#00599c' },
  { name: 'Other', value: 5, color: '#8b5cf6' },
];

export const GitHubStats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Stats Overview */}
      <div className="lg:col-span-1 space-y-6">
        <Card className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
            <Book size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Repositories</p>
            <p className="text-2xl font-bold">42</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
            <GitCommit size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Total Commits</p>
            <p className="text-2xl font-bold">1,284</p>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
            <Code size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Main Language</p>
            <p className="text-2xl font-bold">TypeScript</p>
          </div>
        </Card>
      </div>

      {/* Language Distribution */}
      <Card className="lg:col-span-1">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">Languages</h3>
          <Github size={16} className="text-gray-600" />
        </div>
        <div className="h-48 w-full flex items-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={languageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {languageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#161616', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
                itemStyle={{ color: '#fff' }}
                labelStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-2 ml-4">
            {languageData.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
