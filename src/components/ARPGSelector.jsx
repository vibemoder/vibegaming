import React, { useState } from 'react';
import '../styles/components/ARPGSelector.css';

const arpgs = [
  {
    id: 'diablo-4',
    name: 'Diablo IV',
    icon: '/assets/icons/diablo-4-filled.svg',
    builds: ['Spiritborn', 'Barbarian', 'Sorcerer', 'Druid', 'Rogue', 'Necromancer'],
    news: ['Patch Notes', 'Season Updates', 'Development Blogs']
  },
  {
    id: 'poe',
    name: 'Path of Exile',
    icon: '/assets/icons/poe.svg',
    builds: ['Witch', 'Ranger', 'Duelist', 'Templar', 'Marauder', 'Shadow'],
    news: ['League Announcements', 'Balance Changes']
  },
  {
    id: 'poe-2',
    name: 'PoE 2',
    icon: '/assets/icons/poe-2.svg',
    builds: ['Warrior', 'Huntress', 'Sorceress', 'Monk'],
    news: ['Beta Info', 'Trailer Breakdown']
  }
];

export default function ARPGSelector({ labels }) {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="arpg-selector">
      {arpgs.map((game) => (
        <div 
          key={game.id} 
          className="game-item"
          onMouseEnter={() => setActiveMenu(game.id)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="game-trigger">
            <img src={game.icon} alt={game.name} width="24" height="24" />
            <span>{game.name}</span>
          </div>

          {activeMenu === game.id && (
            <div className="dropdown">
              <div className="dropdown-section">
                <h4>{labels.builds}</h4>
                <ul>
                  {game.builds.map(build => (
                    <li key={build}><a href={`/${game.id}/builds/${build.toLowerCase()}`}>{build}</a></li>
                  ))}
                </ul>
              </div>
              <div className="dropdown-section">
                <h4>{labels.news}</h4>
                <ul>
                  {game.news.map(item => (
                    <li key={item}><a href={`/${game.id}/news/${item.toLowerCase().replace(' ', '-')}`}>{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
