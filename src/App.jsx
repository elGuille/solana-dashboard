import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const App = () => {
  const [priceData, setPriceData] = useState([
    { timestamp: '00:00', price: 107.23 },
    { timestamp: '04:00', price: 108.45 },
    { timestamp: '08:00', price: 106.89 },
    { timestamp: '12:00', price: 109.34 },
    { timestamp: '16:00', price: 110.56 },
    { timestamp: '20:00', price: 111.23 },
    { timestamp: '24:00', price: 112.45 }
  ]);

  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Solana DeFi Ecosystem Sees Major Growth',
      date: '2024-12-06',
      snippet: 'The Solana DeFi ecosystem has experienced significant growth with total value locked reaching new highs...'
    },
    {
      id: 2,
      title: 'New NFT Project Launches on Solana',
      date: '2024-12-06',
      snippet: 'A highly anticipated NFT project has chosen Solana as its blockchain of choice due to low fees and high speed...'
    },
    {
      id: 3,
      title: 'Solana Network Performance Update',
      date: '2024-12-05',
      snippet: 'Recent network upgrades have led to improved transaction processing speeds and reduced congestion...'
    }
  ]);

  const currentPrice = 112.45;
  const priceChange = +2.34;
  const priceChangePercent = +2.12;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Solana Dashboard</h1>
        
        {/* Price Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-bold">${currentPrice}</span>
                <span className={`flex items-center ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {priceChange >= 0 ? <ArrowUpIcon className="w-4 h-4" /> : <ArrowDownIcon className="w-4 h-4" />}
                  {Math.abs(priceChange).toFixed(2)} ({Math.abs(priceChangePercent).toFixed(2)}%)
                </span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>24h Price Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* News Section */}
        <Card>
          <CardHeader>
            <CardTitle>Latest News</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {news.map((item) => (
                <div key={item.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="mt-2">{item.snippet}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default App;