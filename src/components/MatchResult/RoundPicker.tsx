import {
  Flex,
  Skeleton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { useState } from 'react';
import useMatchLengthStore from '../../stores/lengthStore';
import useRoundStore from '../../stores/roundStore';

function RoundPicker() {
  const { matchLength } = useMatchLengthStore();
  const { setRound } = useRoundStore();

  const [sliderValue, setSliderValue] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);

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
    <Flex h='60px'>
      <Slider
        id='slider'
        defaultValue={1}
        min={1}
        max={matchLength}
        size='lg'
        onChange={v => (setSliderValue(v), setRound(v - 1))}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
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
