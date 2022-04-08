import { Global } from '@emotion/react';
import { Button } from '../components/Button';
import { globalCss } from '../global';
export default function Home() {
  return (
    <>
      <Global styles={globalCss}></Global>
      <Button>Click Me!</Button>
    </>
  );
}
