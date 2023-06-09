import {
  Flex,
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderProps,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import useMatchLengthStore from '../../../stores/lengthStore';
import useRoundStore from '../../../stores/roundStore';

function RoundPicker({ minH, orientation, mt, ml, fontSize }: SliderProps) {
  const { matchLength } = useMatchLengthStore();
  const { setRound } = useRoundStore();

  const [sliderValue, setSliderValue] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);

  const labelStyles = {
    mt: mt ? mt : '8',
    ml: ml ? ml : '-2',
    fontSize: fontSize ? fontSize : 'sm',
    color: 'whiteAlpha.500',
  };

  return !matchLength ? (
    <Skeleton
      startColor='blue.600'
      endColor='red.600'
      height='40px'
      fadeDuration={0.2}
    >
      <Text>loading...</Text>
    </Skeleton>
  ) : (
    <Flex h='max-content'>
      <Slider
        id='slider'
        minH={minH ? minH : '32px'}
        size='lg'
        defaultValue={1}
        min={1}
        max={matchLength}
        orientation={orientation ? orientation : 'horizontal'}
        onChange={v => (setSliderValue(v), setRound(v - 1))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {Array.from({ length: matchLength }, (_, idx) => idx + 1).map(num => {
          return (
            <SliderMark key={num} value={num} {...labelStyles}>
              {num}
            </SliderMark>
          );
        })}
        <SliderTrack h='6px' borderRadius='full'>
          <SliderFilledTrack bgColor='#fdfe3f' />
        </SliderTrack>
        <Tooltip
          px={4}
          py={1}
          hasArrow
          bgColor='#fdfe3f'
          color='black'
          fontSize='md'
          placement='top'
          isOpen={showTooltip}
          label={`Round ${sliderValue}`}
        >
          <SliderThumb boxSize={6} />
        </Tooltip>
      </Slider>
    </Flex>
  );
}

export default RoundPicker;
