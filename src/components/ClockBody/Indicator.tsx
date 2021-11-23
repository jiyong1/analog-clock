import { memo } from 'react';
import { Pin } from './Body.styled';

interface IndicatorProps {
  big: boolean;
  rotate: string;
}

const Indicator = memo(function ({ rotate, big }: IndicatorProps) {
  return <Pin style={{ transform: rotate }} className={big ? 'indicator__big' : ''}></Pin>;
});

export default Indicator;
