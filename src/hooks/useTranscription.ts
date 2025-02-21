import {
  DailyCall,
  DailyEventObject,
  DailyEventObjectAppMessage,
} from '@daily-co/daily-js';
import { useCallback, useDebugValue } from 'react';
import { useRecoilValue } from 'recoil';

import { Transcription, transcriptionState } from '../DailyTranscriptions';
import { useDaily } from './useDaily';
import { useDailyEvent } from './useDailyEvent';

interface UseTranscriptionArgs {
  onTranscriptionStarted?(ev: DailyEventObject<'transcription-started'>): void;
  onTranscriptionStopped?(ev: DailyEventObject<'transcription-stopped'>): void;
  onTranscriptionError?(ev: DailyEventObject<'transcription-error'>): void;
  onTranscriptionAppData?(ev: DailyEventObjectAppMessage<Transcription>): void;
}

export const useTranscription = ({
  onTranscriptionAppData,
  onTranscriptionError,
  onTranscriptionStarted,
  onTranscriptionStopped,
}: UseTranscriptionArgs = {}) => {
  const daily = useDaily();

  const state = useRecoilValue(transcriptionState);

  useDailyEvent(
    'transcription-started',
    useCallback(
      (ev) => {
        onTranscriptionStarted?.(ev);
      },
      [onTranscriptionStarted]
    )
  );
  useDailyEvent(
    'transcription-stopped',
    useCallback(
      (ev) => {
        onTranscriptionStopped?.(ev);
      },
      [onTranscriptionStopped]
    )
  );
  useDailyEvent(
    'transcription-error',
    useCallback(
      (ev) => {
        onTranscriptionError?.(ev);
      },
      [onTranscriptionError]
    )
  );
  useDailyEvent(
    'app-message',
    useCallback(
      (ev: DailyEventObjectAppMessage<Transcription>) => {
        if (ev?.fromId === 'transcription' && ev?.data?.is_final) {
          onTranscriptionAppData?.(ev);
        }
      },
      [onTranscriptionAppData]
    )
  );

  /**
   * Starts the transcription with the given optional options.
   */
  const startTranscription = useCallback(
    (...args: Parameters<DailyCall['startTranscription']>) => {
      if (!daily) return;
      daily.startTranscription(...args);
    },
    [daily]
  );

  /**
   * Stops a transcription.
   */
  const stopTranscription = useCallback(
    (...args: Parameters<DailyCall['stopTranscription']>) => {
      if (!daily) return;
      daily.stopTranscription(...args);
    },
    [daily]
  );

  const result = {
    ...state,
    startTranscription,
    stopTranscription,
  };

  useDebugValue(result);

  return result;
};
