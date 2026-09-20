import type { JSX } from 'react';
import { Button, PageTitle, Screen } from '../ui.tsx';

export function NotFound(): JSX.Element {
  return (
    <Screen>
      <PageTitle sub="That page does not exist.">Nothing here</PageTitle>
      <Button to="/" variant="primary">
        Back to today
      </Button>
    </Screen>
  );
}
