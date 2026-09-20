import type { JSX } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router';
import { Home } from './routes/Home.tsx';
import { Preview } from './routes/Preview.tsx';
import { Player } from './routes/Player.tsx';
import { Complete } from './routes/Complete.tsx';
import { Library } from './routes/Library.tsx';
import { ExerciseDetail } from './routes/ExerciseDetail.tsx';
import { Progress } from './routes/Progress.tsx';
import { Settings } from './routes/Settings.tsx';
import { Figures } from './routes/Figures.tsx';
import { Build } from './routes/Build.tsx';
import { Routines } from './routes/Routines.tsx';
import { Favourites } from './routes/Favourites.tsx';
import { NotFound } from './routes/NotFound.tsx';

const TABS = [
  { to: '/', label: 'Today' },
  { to: '/routines', label: 'Mine' },
  { to: '/library', label: 'Library' },
  { to: '/progress', label: 'Progress' },
  { to: '/settings', label: 'Settings' },
];

function TabBar(): JSX.Element {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-20 border-t border-edge bg-ink/95 backdrop-blur"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0)' }}
    >
      <ul className="mx-auto flex max-w-2xl">
        {TABS.map((tab) => (
          <li key={tab.to} className="flex-1">
            <NavLink
              to={tab.to}
              end={tab.to === '/'}
              className={({ isActive }) =>
                `flex h-14 items-center justify-center text-sm font-medium transition-colors ${
                  isActive ? 'text-amber' : 'text-bone-dim hover:text-bone'
                }`
              }
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function App(): JSX.Element {
  const { pathname } = useLocation();
  // The player is full-bleed and must not compete with navigation while you are
  // holding a position on the floor.
  const immersive = pathname.startsWith('/session/play');

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/session" element={<Preview />} />
        <Route path="/session/play" element={<Player />} />
        <Route path="/session/done" element={<Complete />} />
        <Route path="/build" element={<Build />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:id" element={<ExerciseDetail />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!immersive && <TabBar />}
    </>
  );
}
