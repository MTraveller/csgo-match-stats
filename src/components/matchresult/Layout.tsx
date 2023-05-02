import { useBreakpoint } from '@chakra-ui/react';
import BaseLayout from './BaseLayout';
import LGLayout from './LGLayout';
import MDLayout from './MDLayout';
import SMLayout from './SMLayout';

interface Layouts {
  [x: string]: JSX.Element;
}

function Layout() {
  const breakpoint = useBreakpoint({ ssr: false });

  const layout: Layouts = {
    lg: <LGLayout />,
    md: <MDLayout />,
    sm: <SMLayout />,
    base: <BaseLayout />,
  };

  return layout[breakpoint] || <LGLayout />;
}

export default Layout;
