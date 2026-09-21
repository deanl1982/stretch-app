import { useEffect, useState, type JSX } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router';
import { GATE_ENABLED, isSignedIn } from './auth/gate.ts';
import { Login } from './routes/Login.tsx';
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
  { to: '/', label: 'Home' },
  { to: '/routines', label: 'My Workouts' },
  { to: '/library', label: 'Library' },
  { to: '/progress', label: 'My Streak' },
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
                `flex h-14 items-center justify-center px-1 text-center text-xs font-medium leading-tight tracking-tight transition-colors ${
                  isActive ? 'text-accent' : 'text-bone-dim hover:text-bone'
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

const APP_NAME = 'Groundwork Flexibility';

/** Page titles per route. A single-page app must set these itself, or every screen
 *  announces the same title to a screen reader on navigation (WCAG 2.4.2). */
const TITLES: { match: (path: string) => boolean; title: string }[] = [
  { match: (p) => p === '/', title: 'Home' },
  { match: (p) => p === '/session', title: 'Today’s draw' },
  { match: (p) => p === '/session/play', title: 'Session in progress' },
  { match: (p) => p === '/session/done', title: 'Session complete' },
  { match: (p) => p === '/build', title: 'Build a workout' },
  { match: (p) => p === '/routines', title: 'My workouts' },
  { match: (p) => p === '/favourites', title: 'Favourites' },
  { match: (p) => p.startsWith('/library/'), title: 'Position' },
  { match: (p) => p === '/library', title: 'Library' },
  { match: (p) => p === '/progress', title: 'My streak' },
  { match: (p) => p === '/settings', title: 'Settings' },
  { match: (p) => p === '/figures', title: 'Figures' },
];

function useDocumentTitle(pathname: string, locked: boolean): void {
  useEffect(() => {
    if (locked) {
      document.title = `Sign in · ${APP_NAME}`;
      return;
    }
    const found = TITLES.find((entry) => entry.match(pathname));
    document.title = found === undefined ? APP_NAME : `${found.title} · ${APP_NAME}`;
  }, [pathname, locked]);
}

export function App(): JSX.Element {
  const { pathname } = useLocation();
  const [unlocked, setUnlocked] = useState(isSignedIn);

  useDocumentTitle(pathname, GATE_ENABLED && !unlocked);

  // Development gate. Set VITE_REQUIRE_LOGIN=false to lift it, or delete this
  // block along with src/auth and the Login route. See src/auth/gate.ts — it is
  // a doormat, not a lock.
  if (GATE_ENABLED && !unlocked) {
    return <Login onSuccess={() => setUnlocked(true)} />;
  }

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
