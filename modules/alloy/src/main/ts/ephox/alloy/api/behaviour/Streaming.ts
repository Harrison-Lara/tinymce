import * as ActiveStreaming from '../../behaviour/streaming/ActiveStreaming';
import StreamingSchema from '../../behaviour/streaming/StreamingSchema';
import { StreamingBehaviour } from '../../behaviour/streaming/StreamingTypes';
import * as StreamingState from '../../behaviour/streaming/StreamingState';
import * as Behaviour from './Behaviour';

const Streaming = Behaviour.create({
  fields: StreamingSchema,
  name: 'streaming',
  active: ActiveStreaming,
  state: StreamingState
}) as StreamingBehaviour;

export {
  Streaming
};