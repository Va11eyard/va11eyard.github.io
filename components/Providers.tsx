'use client';

import type {
  BorderStyle,
  NeutralColor,
  ScalingSize,
  SolidStyle,
  SolidType,
  SurfaceStyle,
  TransitionStyle,
  Schemes,
} from '@once-ui-system/core';
import {
  IconProvider,
  LayoutProvider,
  ThemeProvider,
  ToastProvider,
} from '@once-ui-system/core';
import { iconLibrary } from '@/resources/icons';
import { style } from '@/resources/site';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <ThemeProvider
        brand={style.brand as Schemes}
        accent={style.accent as Schemes}
        neutral={style.neutral as NeutralColor}
        solid={style.solid as SolidType}
        solidStyle={style.solidStyle as SolidStyle}
        border={style.border as BorderStyle}
        surface={style.surface as SurfaceStyle}
        transition={style.transition as TransitionStyle}
        scaling={style.scaling as ScalingSize}
      >
        <ToastProvider>
          <IconProvider icons={iconLibrary}>{children}</IconProvider>
        </ToastProvider>
      </ThemeProvider>
    </LayoutProvider>
  );
}
